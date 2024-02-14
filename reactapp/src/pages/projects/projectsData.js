import CaptionsThumbnail2 from "../../assets/project-media/captions-2.png";
import CaptionsThumbnail3 from "../../assets/project-media/captions-3.png";
import CaptionsThumbnail4 from "../../assets/project-media/captions-4.png";
import CaptionsThumbnail5 from "../../assets/project-media/captions-5.png";
import CaptionsDemo2 from "../../assets/project-media/captions-demo-2.mp4";
import CaptionsDemo3 from "../../assets/project-media/captions-demo-3.mp4";
import CaptionsDemo from "../../assets/project-media/captions-demo.mp4";
import CaptionsThumbnail from "../../assets/project-media/captions.png";
import CovidCoveThumbnail from "../../assets/project-media/covid-cove.jpg";
import EasyConveyThumbnail2 from "../../assets/project-media/easy-convey-2.png";
import EasyConveyThumbnail3 from "../../assets/project-media/easy-convey-3.png";
import EasyConveyThumbnail4 from "../../assets/project-media/easy-convey-4.png";
import EasyConveyThumbnail5 from "../../assets/project-media/easy-convey-5.png";
import EasyConveyThumbnail6 from "../../assets/project-media/easy-convey-6.png";
import EasyConveyThumbnail7 from "../../assets/project-media/easy-convey-7.png";
import EasyConveyThumbnail from "../../assets/project-media/easy-convey.png";
import MMAThumbnail from "../../assets/project-media/mma-api.jpg";

export const webApps = [
  {
    title: "Easy Convey Legal Docs",
    image: EasyConveyThumbnail,
    technologies: "NodeJS | React | MySQL | NGINX | Docker | Redis",
    description:
      "A law and calendar based web application created as part of my Software Engineering capstone used to parse, generate, store and send various types of legal documents for contracts, titles deeds taxes and more.",
    projectMedia: [
      EasyConveyThumbnail,
      EasyConveyThumbnail2,
      EasyConveyThumbnail3,
      EasyConveyThumbnail4,
      EasyConveyThumbnail5,
      EasyConveyThumbnail6,
      EasyConveyThumbnail7,
    ],
    bgcolor: "#B09716",
    id: "1",
  },
  {
    title: "CovidCove Stats Dashboard",
    image: CovidCoveThumbnail,
    technologies: "Django | SQL | Python | Docker",
    description:
      "A dashboard web application that gathered live data throughout COVID-19 to display up to date charting information and visualizations on the virus such as recovery vs fatality rates, areas most affected and vacination rates. This was done through integration with various APIs and data sources.\n",
    projectMedia: [CovidCoveThumbnail],
    source: "https://github.com/FelixVaughan/CovidCove",
    bgcolor: "#222b31",
    id: "2",
  },
];

export const backendProjects = [
  {
    title: "Mixed Martial Arts API",
    image: MMAThumbnail,
    technologies: "NodeJS | Docker | Bash | Express | MongoDB | AWS",
    description:
      "A REST API and web scraper project written using the NodeJS runtime along with the express framework for gathering data on current and past MMA fighers and making them accessible via public endpoints from an EC2 container.",
    projectMedia: [MMAThumbnail],
    github: "https://github.com/FelixVaughan/UFC-FIGHTER-API",
    bgcolor: "#222b31",
    id: "3",
  },
  {
    title: "Youtube Captions Extension",
    image: CaptionsThumbnail,
    technologies: "JavaScript | Bash | NodeJS | AWS | HTML | CSS",
    description:
      "Allows users to search and jump to locations in YouTube videos based off of subtitle timestamps. Search available in multiple languages.",
    projectMedia: [
      CaptionsDemo,
      CaptionsDemo2,
      CaptionsDemo3,
      CaptionsThumbnail,
      CaptionsThumbnail2,
      CaptionsThumbnail3,
      CaptionsThumbnail4,
      CaptionsThumbnail5,
    ],
    github: "https://github.com/FelixVaughan/youtube-captions-search",
    bgcolor: "#B09716",
    id: "4",
  },
];
