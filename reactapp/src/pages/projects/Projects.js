import { useMediaQuery } from "@mui/material";
import { Card, CardContent, Grid, Typography } from "@mui/material/";
import {
  DiAws,
  DiDjango,
  DiDocker,
  DiMongodb,
  DiNginx,
  DiNodejsSmall,
  DiPostgresql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { FaGithubAlt } from "react-icons/fa";
import "./projects.css";
import projectList from "./projects.json";

const ListStack = ({ list }) => {
  const logoPairGen = (str = "") => {
    const pairs = {
      Nodejs: DiNodejsSmall,
      React: DiReact,
      MongoDB: DiMongodb,
      SQL: DiPostgresql,
      Python: DiPython,
      AWS: DiAws,
      Docker: DiDocker,
      Django: DiDjango,
      Nginx: DiNginx,
    };
    str = str.toLowerCase();
    return Object.entries(pairs).find(
      ([text, logo]) => text.toLowerCase() === str
    );
  };

  return (
    <div className="list-stack-container">
      {list.map((str) => {
        const logoPair = logoPairGen(str);
        const Logo = logoPair[1];
        return (
          <span className="logo-pair">
            <span>{logoPair[0]}</span> <Logo />
          </span>
        );
      })}
    </div>
  );
};

function Project({ header, content, path, stack, link, reverseOrder = false }) {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  const styles = {
    card: {
      maxWidth: isSmallScreen ? "300px" : "345px", // Adjusting the max width based on screen size
      marginLeft: reverseOrder ? "0" : "auto",
      marginBlock: 2.5,
      backgroundColor: "var(--card)",
      height: 200,
      minWidth: isSmallScreen ? "280px" : "500px", // Adjusting the min width based on screen size
    },
    typography: {
      color: "var(--primary)",
      fontSize: 15,
      fontWeight: "bold",
    },
  };

  const Img = (
    <Grid item xs={12} sm={6} className="project-img" sx={{ color: "white" }}>
      <div className="image-container" style={{ width: "100%" }}>
        <img
          src={require(`../../assets/project-images/${path}`)}
          width={"100%"}
          height={"100%"}
          alt="project-img.jpg"
        />
      </div>
    </Grid>
  );

  const Desc = (
    <Grid
      item
      xs={12}
      sm={6}
      className="project-desc"
      sx={{ color: "white", textAlign: reverseOrder ? "left" : "right" }}
    >
      <h1 className="project-title">{header}</h1>
      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="body2" sx={styles.typography}>
            {content}
          </Typography>
        </CardContent>
      </Card>
      <ListStack list={stack} />
      <FaGithubAlt
        color="var(--secondary)"
        onClick={() => link && window.open(link, "_blank")}
        style={{ cursor: link ? "pointer" : "default" }}
      />
    </Grid>
  );

  // const isSmallScreen = window.innerWidth <= 768;
  const shouldDisplayDescFirst =
    isSmallScreen || (!isSmallScreen && reverseOrder);

  return (
    <>
      {shouldDisplayDescFirst ? Desc : Img}
      {shouldDisplayDescFirst ? Img : Desc}
    </>
  );
}

export default function Projects() {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <>
      <div
        id="projects-header"
        style={{ marginLeft: isSmallScreen ? "1em" : "22em" }}
      >
        <h1 id="projects-header-text">Some Things I've Built</h1>
        <hr
          id="projects-header-divider"
          style={{ borderColor: "var(--secondary)" }}
        />
      </div>
      <Grid
        container
        spacing={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: isSmallScreen ? "95%" : "75%", // Adjusting width for smaller screens
          margin: "auto",
        }}
      >
        {projectList.map((project, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <Project
              reverseOrder={!isSmallScreen && isOdd}
              content={project.content}
              header={`${index + 1}. ${project.header}`}
              stack={project.tools}
              path={project.img}
              link={project.link}
            />
          );
        })}
      </Grid>
    </>
  );
}
