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
  const styles = {
    card: {
      maxWidth: 345,
      marginLeft: reverseOrder ? "0" : "auto",
      marginBlock: 2.5,
      backgroundColor: "var(--card)",
      height: 200,
      minWidth: 500,
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

  return (
    <>
      {reverseOrder ? Desc : Img}
      {reverseOrder ? Img : Desc}
    </>
  );
}

export default function Projects() {
  // const projectList = JSON.parse("./projects.json");
  return (
    <>
      <div id="projects-header">
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
          width: "75%",
          margin: "auto",
        }}
      >
        {projectList.map((project, index) => {
          const isOdd = index % 2 !== 0;
          console.log(project.img);
          return (
            <Project
              reverseOrder={isOdd}
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
