// import CovidCoveThumbnail from "../../assets/project-images/covid-cove.jpg";
// import EasyConveyThumbnail from "../../assets/project-images/easy-convey.png";
// import MMAAPIThumbnail from "../../assets/project-images/mma-api.jpg";

// export const webApps = [
//   {
//     title: "Easy Convey - Secure File Share",
//     // image: EasyConveyThumbnail,
//     description:
//       "CANshare is a web application I developed during my tenure at Stream Data Systems. It simplifies file sharing for client companies. This project showcases my expertise in web development. It uses React for the frontend, building an intuitive user interface for effortless file uploads, sharing, and collaboration. On the backend, I leveraged .NET (C#) and utilized MSSQL for the database, implementing robust security measures, features such as customizable folder permissions, and efficient organization tools to ensure data privacy and accessibility.",
//     projectMedia: [EasyConveyThumbnail],
//     technologies: "React | C# (.NET) | MSSQL",
//     bgcolor: "#f37737",
//     id: "1",
//   },
//   {
//     title: "CovidCove",
//     // image: CovidCoveThumbnail,
//     technologies: "React | C# (.NET) | MSSQL",
//     description:
//       "For my portfolio, I'm thrilled to showcase an interactive Activity Report I engineered for CANdispatch clients at Stream Data Systems. Utilized by our client security companies, this dynamic report plays a pivotal role in documenting daily guard and patrol activities, contributing significantly to operational efficiency. On the technical front, I employed React for crafting an intuitive and responsive frontend, while the backend API was meticulously constructed using C# and is integrated with an MSSQL database. This project reflects my dedication to delivering practical and efficient solutions that meet the unique needs of each client.",
//     projectMedia: [CovidCoveThumbnail],
//     source: "https://streamdata.com",
//     bgcolor: "#29cbe0",
//     id: "2",
//   },
// ];

// export const backendProjects = [
//   {
//     title: "MMA API",
//     // image: MMAAPIThumbnail,
//     technologies: "NodeJS | MySQL | NGINX | Docker | RabbitMQ",
//     description:
//       "A sophisticated Distributed File System I built as a part of a group exhibiting advanced capabilities such as distributed data access, replication, fault tolerance, consistency, and synchronization, ensuring uninterrupted and reliable operations on a large scale. The project was built using a robust technology stack including NodeJS, MySQL, NGINX, Docker, and RabbitMQ, showcasing my proficiency in leveraging diverse technologies to address complex computing challenges. The system was architected as shown in the diagram below.",
//     projectMedia: [MMAAPIThumbnail],
//     github: "https://github.com/hrithvik123/Distributed-File-Systems",
//     bgcolor: "#f85781",
//     id: "4",
//   },
// ];

import ActivityRptVid from "../../images/projectImages/ActivityRptVid.mp4";
import ActivityRptThumbnail from "../../images/projectImages/ActivityRpt_thumbnail.png";
import AzureThumbnail from "../../images/projectImages/Azure.png";
import CANDDSThumbnail from "../../images/projectImages/CANDDS_thumbnail.png";
import CANsenseThumbnail from "../../images/projectImages/CANsense_thumbnail.png";
import CANshareMedia1 from "../../images/projectImages/CANshare_1.png";
import CANshareMedia2 from "../../images/projectImages/CANshare_2.png";
import CANshareMedia3 from "../../images/projectImages/CANshare_3.png";
import CANshareMedia4 from "../../images/projectImages/CANshare_4.png";
import CANshareThumbnail from "../../images/projectImages/CANshare_thumbnail.png";
import DFSThumbnail from "../../images/projectImages/DFS_thumbnail.png";
import WindowsServerThumbnail from "../../images/projectImages/Windows_Server.png";

export const webApps = [
  {
    title: "CANshare - Secure File Share",
    image: CANshareThumbnail,
    description:
      "CANshare is a web application I developed during my tenure at Stream Data Systems. It simplifies file sharing for client companies. This project showcases my expertise in web development. It uses React for the frontend, building an intuitive user interface for effortless file uploads, sharing, and collaboration. On the backend, I leveraged .NET (C#) and utilized MSSQL for the database, implementing robust security measures, features such as customizable folder permissions, and efficient organization tools to ensure data privacy and accessibility.",
    projectMedia: [
      CANshareMedia1,
      CANshareMedia2,
      CANshareMedia3,
      CANshareMedia4,
      ,
    ],
    technologies: "React | C# (.NET) | MSSQL",
    bgcolor: "#f37737",
    id: "1",
  },
  {
    title: "Activity Report",
    image: ActivityRptThumbnail,
    technologies: "React | C# (.NET) | MSSQL",
    description:
      "For my portfolio, I'm thrilled to showcase an interactive Activity Report I engineered for CANdispatch clients at Stream Data Systems. Utilized by our client security companies, this dynamic report plays a pivotal role in documenting daily guard and patrol activities, contributing significantly to operational efficiency. On the technical front, I employed React for crafting an intuitive and responsive frontend, while the backend API was meticulously constructed using C# and is integrated with an MSSQL database. This project reflects my dedication to delivering practical and efficient solutions that meet the unique needs of each client.",
    projectMedia: [ActivityRptVid],
    source: "https://streamdata.com",
    bgcolor: "#29cbe0",
    id: "2",
  },
];

export const backendProjects = [
  {
    title: "Distributed File System",
    image: DFSThumbnail,
    technologies: "NodeJS | MySQL | NGINX | Docker | RabbitMQ",
    description:
      "A sophisticated Distributed File System I built as a part of a group exhibiting advanced capabilities such as distributed data access, replication, fault tolerance, consistency, and synchronization, ensuring uninterrupted and reliable operations on a large scale. The project was built using a robust technology stack including NodeJS, MySQL, NGINX, Docker, and RabbitMQ, showcasing my proficiency in leveraging diverse technologies to address complex computing challenges. The system was architected as shown in the diagram below.",
    projectMedia: [DFSThumbnail],
    github: "https://github.com/hrithvik123/Distributed-File-Systems",
    bgcolor: "#f85781",
    id: "4",
  },
  {
    title: "DDS - Distributed Data Storage for CANdispatch",
    image: CANDDSThumbnail,
    technologies: "C# (.NET Framework) | MSSQL | IIS | JWT",
    description:
      "DDS is an add-on module I built for CANdispatch clients to easily manage patrol videos and attachments. It allows companies using CANdispatch to serve patrol attachments from any of their local servers to their customers. This module was built using C# and MSSQL with our backend acting as a proxy server to different local servers serving patrol files over HTTPS.",
    projectMedia: [CANDDSThumbnail],
    source: "https://streamdata.com",
    bgcolor: "#6c4bf4",
    id: "3",
  },
];

export const infraProjects = [
  {
    title:
      "CANsense - Infrastructure and application monitoring at Stream Data Systems",
    image: CANsenseThumbnail,
    description:
      "An innovative project to integrate Prometheus, a well-known open-source monitoring tool, with our existing system, CANsense. The project involved architecting a solution that would allow us to monitor servers, applications and databases within our network and for our clients. In a system like this, security is crucial. This work highlights my skill in creating secure, integrated solutions.",
    technologies:
      "Prometheus | Windows Server 2019 | MSSQL | IIS | NGINX",
    projectMedia: [CANsenseThumbnail],
    source: "https://streamdata.com",
    bgcolor: "#ffcc33",
    id: "5",
  },

  {
    title:
      "Server upgrades, client migration and developing Azure pipelines",
    image: WindowsServerThumbnail,
    technologies: "Windows Server 2019 | IIS | Azure",
    description:
      "Performed server upgrades from Windows Server 2008 to Windows Server 2019 and migrations for clients, improving system performance and ensuring uninterrupted operations. Designed and implemented Azure CI/CD pipelines to automate software builds, testing, and deployment - streamlining workflows and enabling faster release of software products.",
    projectMedia: [AzureThumbnail],
    bgcolor: "#3e67ff",
    id: "6",
  },
];
