import CovidCoveThumbnail from "../../assets/project-images/covid-cove.jpg";
import EasyConveyThumbnail from "../../assets/project-images/easy-convey.png";
import MMAAPIThumbnail from "../../assets/project-images/mma-api.jpg";

export const webApps = [
  {
    title: "Easy Convey - Secure File Share",
    image: EasyConveyThumbnail,
    description:
      "CANshare is a web application I developed during my tenure at Stream Data Systems. It simplifies file sharing for client companies. This project showcases my expertise in web development. It uses React for the frontend, building an intuitive user interface for effortless file uploads, sharing, and collaboration. On the backend, I leveraged .NET (C#) and utilized MSSQL for the database, implementing robust security measures, features such as customizable folder permissions, and efficient organization tools to ensure data privacy and accessibility.",
    projectMedia: [EasyConveyThumbnail],
    technologies: "React | C# (.NET) | MSSQL",
    bgcolor: "#f37737",
    id: "1",
  },
  {
    title: "CovidCove",
    image: CovidCoveThumbnail,
    technologies: "React | C# (.NET) | MSSQL",
    description:
      "For my portfolio, I'm thrilled to showcase an interactive Activity Report I engineered for CANdispatch clients at Stream Data Systems. Utilized by our client security companies, this dynamic report plays a pivotal role in documenting daily guard and patrol activities, contributing significantly to operational efficiency. On the technical front, I employed React for crafting an intuitive and responsive frontend, while the backend API was meticulously constructed using C# and is integrated with an MSSQL database. This project reflects my dedication to delivering practical and efficient solutions that meet the unique needs of each client.",
    projectMedia: [CovidCoveThumbnail],
    source: "https://streamdata.com",
    bgcolor: "#29cbe0",
    id: "2",
  },
];

export const backendProjects = [
  {
    title: "MMA API",
    image: MMAAPIThumbnail,
    technologies: "NodeJS | MySQL | NGINX | Docker | RabbitMQ",
    description:
      "A sophisticated Distributed File System I built as a part of a group exhibiting advanced capabilities such as distributed data access, replication, fault tolerance, consistency, and synchronization, ensuring uninterrupted and reliable operations on a large scale. The project was built using a robust technology stack including NodeJS, MySQL, NGINX, Docker, and RabbitMQ, showcasing my proficiency in leveraging diverse technologies to address complex computing challenges. The system was architected as shown in the diagram below.",
    projectMedia: [MMAAPIThumbnail],
    github: "https://github.com/hrithvik123/Distributed-File-Systems",
    bgcolor: "#f85781",
    id: "4",
  },
];
