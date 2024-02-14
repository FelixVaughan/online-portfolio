import Project from "../../components/Project/Project";
import { backendProjects, webApps } from "./projectsData";

const PageHeader = ({ title, description }) => (
  <>
    <p className="pageDescription">{description}</p>
    <h3 className="pageTitle">{title}</h3>
  </>
);

const Projects = () => {
  const WebAppsList = () =>
    webApps.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
        projectMedia={project.projectMedia}
      />
    ));

  const BackendProjects = () =>
    backendProjects.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
        projectMedia={project.projectMedia}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <h5 className="pageSubTitle">Full Stack Projects</h5>
      <div className="row spacing_bottom">
        <WebAppsList />
      </div>
      <h5 className="pageSubTitle">Backend Projects</h5>
      <div className="row spacing_bottom">
        <BackendProjects />
      </div>
    </section>
  );
};

export default Projects;
