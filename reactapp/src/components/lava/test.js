window.lavaAnimation = (function () {
  // Object to handle the canvas screen
  var Screen = {
    elem: null,
    callback: null,
    ctx: null,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    // Screen initialization
    init: function (id, callback, doResize) {
      this.elem = document.getElementById(id);
      this.callback = callback || null;
      if (this.elem.tagName == "CANVAS") {
        this.ctx = this.elem.getContext("2d");
      }
      // Resize event listener
      window.addEventListener("resize", this.resize.bind(this), false);
      // Prevent dragging and selection
      this.elem.onselectstart = function () {
        return false;
      };
      this.elem.ondrag = function () {
        return false;
      };
      // Perform resize if doResize is true
      if (doResize) this.resize();
      return this;
    },
    // Resize handler
    resize: function () {
      var elem = this.elem;
      this.width = elem.offsetWidth;
      this.height = elem.offsetHeight;
      this.left = 0;
      this.top = 0;
      // Get total offset top and left
      while (elem != null) {
        this.left += elem.offsetLeft;
        this.top += elem.offsetTop;
        elem = elem.offsetParent;
      }
      // Resize canvas
      if (this.ctx) {
        this.elem.width = this.width;
        this.elem.height = this.height;
      }
      // Callback function call
      if (this.callback) this.callback();
    },
  };

  // Object to handle forces
  var Force = function (x, y) {
    this.x = x;
    this.y = y;
    this.magnitude = x * x + y * y;
    this.computed = 0;
    this.force = 0;
  };
  Force.prototype.add = function (other) {
    return new Force(this.x + other.x, this.y + other.y);
  };

  // Object to handle balls
  var Ball = function (screen) {
    // Random initial velocity
    this.vel = new Force(
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + 0.25 * Math.random()),
      (Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random())
    );
    // Random initial position
    this.pos = new Force(
      0.2 * screen.width + Math.random() * screen.width * 0.6,
      0.2 * screen.height + Math.random() * screen.height * 0.6
    );
    this.size =
      screen.wh / 15 + (Math.random() * (1.5 - 0.1) + 0.1) * (screen.wh / 15);
    this.width = screen.width;
    this.height = screen.height;
  };
  Ball.prototype.move = function () {
    // Check for collision with boundaries
    if (this.pos.x >= this.width - this.size) {
      if (this.vel.x > 0) this.vel.x = -this.vel.x;
      this.pos.x = this.width - this.size;
    } else if (this.pos.x <= this.size) {
      if (this.vel.x < 0) this.vel.x = -this.vel.x;
      this.pos.x = this.size;
    }
    if (this.pos.y >= this.height - this.size) {
      if (this.vel.y > 0) this.vel.y = -this.vel.y;
      this.pos.y = this.height - this.size;
    } else if (this.pos.y <= this.size) {
      if (this.vel.y < 0) this.vel.y = -this.vel.y;
      this.pos.y = this.size;
    }
    // Update position
    this.pos = this.pos.add(this.vel);
  };
  function MetaballSystem(
    context,
    width,
    height,
    numberOfBalls,
    startColor,
    endColor
  ) {
    this.step = 5;
    this.context = context;
    this.width = width;
    this.height = height;
    this.smallestDimension = Math.min(width, height);
    this.sx = Math.floor(this.width / this.step);
    this.sy = Math.floor(this.height / this.step);
    this.shouldPaint = false;
    this.metaFill = createRadialGradient(
      context,
      width,
      height,
      width,
      startColor,
      endColor
    );
    this.plx = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
    this.ply = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
    this.mscases = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
    this.ix = [1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1];
    this.grid = [];
    this.balls = [];
    this.iter = 0;
    this.sign = 1;

    for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
      this.grid[i] = new Force(
        (i % (this.sx + 2)) * this.step,
        Math.floor(i / (this.sx + 2)) * this.step
      );
    }

    for (let i = 0; i < numberOfBalls; i++) {
      this.balls[i] = new Ball(this);
    }
  }

  MetaballSystem.prototype.computeForce = function (x, y, index) {
    let force;
    let cellIndex = index || x + y * (this.sx + 2);

    if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
      force = 0.6 * this.sign;
    } else {
      force = 0;
      for (let ball of this.balls) {
        let distanceToBallSquared =
          -2 * this.grid[cellIndex].x * ball.pos.x -
          2 * this.grid[cellIndex].y * ball.pos.y +
          ball.pos.magnitude +
          this.grid[cellIndex].magnitude;
        force += (ball.size * ball.size) / distanceToBallSquared;
      }
      force *= this.sign;
    }
    this.grid[cellIndex].force = force;

    return force;
  };

  MetaballSystem.prototype.marchingSquares = function (start) {
    var i = start[0],
      s = start[1],
      h = start[2],
      e = i + s * (this.sx + 2);
    if (this.grid[e].computed === this.iter) return !1;
    for (var r, n = 0, a = 0; a < 4; a++) {
      var l = i + this.ix[a + 12] + (s + this.ix[a + 16]) * (this.sx + 2);
      var d = this.grid[l].force;
      if ((d > 0 && this.sign < 0) || (d < 0 && this.sign > 0) || !d) {
        d = this.computeForce(i + this.ix[a + 12], s + this.ix[a + 16], l);
      }
      if (Math.abs(d) > 1) {
        n += Math.pow(2, a);
      }
    }
    if (n === 15) return [i, s - 1, !1];
    if (n === 5) {
      r = h === 2 ? 3 : 1;
    } else if (n === 10) {
      r = h === 3 ? 0 : 2;
    } else {
      r = this.mscases[n];
      this.grid[e].computed = this.iter;
    }
    var p =
      this.step /
      (Math.abs(
        Math.abs(
          this.grid[
            i + this.plx[4 * r + 2] + (s + this.ply[4 * r + 2]) * (this.sx + 2)
          ].force
        ) - 1
      ) /
        Math.abs(
          Math.abs(
            this.grid[
              i +
                this.plx[4 * r + 3] +
                (s + this.ply[4 * r + 3]) * (this.sx + 2)
            ].force
          ) - 1
        ) +
        1);
    return (
      this.context.lineTo(
        this.grid[i + this.plx[4 * r] + (s + this.ply[4 * r]) * (this.sx + 2)]
          .x +
          this.ix[r] * p,
        this.grid[
          i + this.plx[4 * r + 1] + (s + this.ply[4 * r + 1]) * (this.sx + 2)
        ].y +
          this.ix[r + 4] * p
      ),
      (this.shouldPaint = true),
      [i + this.ix[r + 4], s + this.ix[r + 8], r]
    );
  };

  MetaballSystem.prototype.renderMetaballs = function () {
    for (let ball of this.balls) {
      ball.move();
    }

    this.iter++;
    this.sign = -this.sign;
    this.shouldPaint = false;
    this.context.fillStyle = this.metaFill;
    this.context.beginPath();

    for (let ball of this.balls) {
      let cellPosition = [
        Math.round(ball.pos.x / this.step),
        Math.round(ball.pos.y / this.step),
        false,
      ];

      do {
        cellPosition = this.marchingSquares(cellPosition);
      } while (cellPosition);

      if (this.shouldPaint) {
        this.context.fill();
        this.context.closePath();
        this.context.beginPath();
        this.shouldPaint = false;
      }
    }
  };

  function createRadialGradient(context, x, y, radius, startColor, endColor) {
    let gradient = context.createRadialGradient(
      x / 1,
      y / 1,
      0,
      x / 1,
      y / 1,
      radius
    );
    gradient.addColorStop(0, startColor);
    gradient.addColorStop(1, endColor);

    return gradient;
  }

  if (document.getElementById("lamp-anim")) {
    var renderAnimation = function () {
      requestAnimationFrame(renderAnimation);
      context.clearRect(0, 0, screen.width, screen.height);
      metaballSystem.renderMetaballs();
    };

    let screen = Screen.init("lamp-anim", null, true);
    let context = screen.ctx;
    screen.resize();

    let metaballSystem = new MetaballSystem(
      context,
      screen.width,
      screen.height,
      6,
      "#ff0000",
      "#ff0000"
    );
  }
  return { run: renderAnimation };

  //
})();

// Run the lava animation if the 'lamp-anim' element exists
if (document.getElementById("lamp-anim")) {
  lavaAnimation.run();
}

// Add class "is-loaded" to the "js-works-d-list" element after 150 milliseconds
setTimeout(function () {
  $(".js-works-d-list").addClass("is-loaded");
}, 150);
