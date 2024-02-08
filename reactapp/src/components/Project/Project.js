import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import closeModal from "../../assets/projects/close.svg";
import "./project.css";
const Project = ({
  technologies,
  title,
  image,
  color,
  id,
  github,
  deployed,
  description,
  projectMedia,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollGalleryLeft = () => {
    setScrollPosition(scrollPosition - 100); // Adjust the scrolling increment as needed
  };

  const scrollGalleryRight = () => {
    setScrollPosition(scrollPosition + 100); // Adjust the scrolling increment as needed
  };

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">{technologies}</p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">View Work &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt={title} />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            width: projectMedia ? "80%" : "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
          zIndex: "999",
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
        {/* Image gallery as a horizontal carousel */}
        {projectMedia && (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            className="carousel-container" // added class here
          >
            {projectMedia.map((media, index) => {
              const isVideo = media.endsWith(".mp4");

              return (
                <div key={index} className="carousel-item">
                  <figure>
                    {isVideo ? (
                      <video controls className="carousel-image">
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={media}
                        alt={`Project Media ${index}`}
                        className="carousel-image"
                      />
                    )}
                    {media.source && (
                      <figcaption>
                        Source: <a href={media.source}>URL</a>
                      </figcaption>
                    )}
                  </figure>
                </div>
              );
            })}
          </Slider>
        )}
        {github && (
          <button
            className="btn"
            onClick={() => (window.location.href = github)}
          >
            GitHub Repo
          </button>
        )}
        {deployed && (
          <button
            className="btn"
            onClick={() => (window.location.href = deployed)}
          >
            Live Link
          </button>
        )}
      </Modal>
    </motion.div>
  );
};

export default Project;
