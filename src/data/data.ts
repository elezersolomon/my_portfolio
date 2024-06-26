/* eslint-disable max-len */
import tlgrmProjectBackGround from "../assets/images/banner.jpeg";
import MuluGProjectBackGround from "../assets/images/muluG_background.jpg";
import TaskManagementBackGround from "../assets/images/metroBackground.jpg";
import spaceXlogo from "../assets/images/SpaceXLogo.jpg";

export interface ISocial {
  name: "LinkedIn" | "Behance" | "Github" | "Instagram" | "Facebook";
  url: string;
}

export interface ICertification {
  name: string;
  issuedBy: string;
  verificationURL: string;
}

export interface IProject {
  imageUrl?: string;
  name: string;
  companyName: string;
  url: string;
  description: string[];
  tags: string[];
}

export interface IExperience {
  shortName: string;
  companyName: string;
  endDate: string;
  position: string;
  startDate: string;
  summary: string[];
  website: string;
}

export interface ISkill {
  languages: string[];
  technologies: string[];
  toolsAndPlatforms: string[];
  concepts: string[];
}

export interface IStudent {
  avatar: string;
  name: string;
  quote: string;
}

export interface IProfile {
  name: string;
  intro: string;
  skills?: ISkill;
  phone: string;
  email: string;
  socials: ISocial[];
  bio: string[];
  students?: IStudent[];
  experiences?: IExperience[];
  certifications?: ICertification[];
  projects?: IProject[];
  goodByeText: string;
}

const profile: IProfile = {
  name: "Elezer Solomon",
  intro: "A ComputerScience graduate and Full Stack Developer",
  students: [
    {
      name: "Awais Zafar",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5103AQHNewoR5FzCaQ/profile-displayphoto-shrink_400_400/0/1587200960601?e=1623888000&v=beta&t=mquh0pdkolkg1VWbpkIKU2BlskgnfJSyNhTxyowWVU8",
      quote: "BSCS Lahore Garrison University",
    },
    {
      name: "Umair Zafar",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEnZr7IWnstyQ/profile-displayphoto-shrink_400_400/0/1615956840787?e=1623888000&v=beta&t=HtxlJheHPxhmfW9J0M7gxlzDcG0yAtsuKcmPWBjxNCY",
      quote: "Mechanical Engineer turned Front-End Engineer",
    },
    {
      name: "Muhammad Naeem Shahzad",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEpvSpnRoE2fQ/profile-displayphoto-shrink_400_400/0/1615923251107?e=1623888000&v=beta&t=zMxgT_UcKU8T_S-bcV1pgwEtuCybrwQGmbssd5NZY-A",
      quote: "Front-End Developer at Uncle Fixer",
    },
    {
      name: "Ailyah Christopher",
      avatar:
        "https://media-exp1.licdn.com/dms/image/C4D03AQFtX6s0y9aMjw/profile-displayphoto-shrink_400_400/0/1615563401157?e=1625097600&v=beta&t=lBw3lei20-m5lL147KACGlYzXbQYAds0uoc6bdMxDKg",
      quote: "Python Enthusiast",
    },
    {
      name: "Ahmad Muzzafar",
      avatar: "",
      quote: "Learning to crawl, walk, run and fly",
    },
    {
      name: "Muhammad Shahzeb",
      avatar: "",
      quote: "Learning to crawl, walk, run and fly",
    },
    {
      name: "Farhan Ahmad",
      avatar: "",
      quote: "Learning to crawl, walk, run and fly",
    },
  ],
  phone: "+251989163300",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elezersolomon/",
    },
    {
      name: "Behance",
      url: "http://www.behance.com/fahadachaudhry",
    },
    {
      name: "Github",
      url: "https://github.com/elezersolomon",
    },
    {
      name: "Instagram",
      url: "http://www.instagram.com/fahadachaudhry",
    },
    {
      name: "Facebook",
      url: "http://www.facebook.com/fahadachaudhry",
    },
  ],
  email: "elezersolomon2@gmail.com",
  bio: [
    "I am a dedicated full-stack developer who have gained skills in using different tech stacks such as MERN stack that helped me to gain Experience in both front-end and back-end development, learn database creation and integration, and learn the concept of rest APIs and microservices. In the DevOps section I considerable amount of experience in CI/Cd layout using GitHub workflow, circle ci, Heroku, and great experience in AWS services and Infrastructure as a code with AWS CDK.",
  ],
  skills: {
    languages: ["javascript", "php", "sql", "html", "css", "xml", "yaml"],
    technologies: [
      "graphql",
      "nextJS",
      "reactJS",
      "materialui",
      "nodejs",
      "jest",
      "docker",
      "AWS CDK(typescript)",
      "Flutter",
    ],
    toolsAndPlatforms: [
      "Github",
      "Git",
      "gitlab",
      "githubaction",
      "hiroku",
      "github",
      "postman",
      "aws(s3, cloudFront, CodeCommit ,lambda, APIGateway, codePipeline)",
    ],
    concepts: [
      "Microservices",
      "OOP",
      "ata Structure & Algorithm",
      "Distributed Systems",
      "Continuous integration & deployment",
      "micro front-end",
      "Agile methodologies (Scrum, Kanban).",
    ],
  },
  experiences: [
    {
      shortName: "Freelance",
      companyName: "Freelance Remote",
      endDate: "Present",
      position: "Full Stack Engineer ",
      startDate: "Aug 2021",
      summary: [
        "An e-commerce platform to enable users to use telegram bot to post, edit and delete a product for sale.",
        "● Start-up E-commerce platform development and Telegram API integration.",
        "● Research, proof of concept development, and requirement analysis.",
        "● Software and product design.",
        "● Frontend development with React, and micro-frontend architecture.",
        "● Backend development with NodeJS and microservice architecture.",
        "● Software Version Control with Git.",
        "● Project management with Github.",
      ],
      website: "",
    },
    {
      shortName: "HURRICANE SUPPORT",
      companyName: "HURRICANE SUPPORT",
      endDate: "march 2021",
      position: "Front-end Developer",
      startDate: "Nov 2020",
      summary: [
        "● Front-end development React, React native, expo go, Axios. MUI, JWT.",
        "● Back-end development with node.js, JWT, Nextron, PouchDB, and CouchDB.",
        "● End-user testing",
        "● Unit testing",
        "● Building and preparing release versions",
        "● Code refactor",
        "● Project management",
      ],
      website:
        "https://www.linkedin.com/company/hurricane-support/?originalSubdomain=et",
    },
    {
      shortName: "Freelance",
      companyName: "Freelance Remote",
      endDate: "Sep 2020",
      position: "Full Stack Engineer",
      startDate: "Mar 2020",
      summary: [
        "● Start-up E-commerce platform development with NextJS",
        "● Backend application development with NodeJS, GraphQL, MySQL.",
      ],
      website: "",
    },
  ],
  certifications: [
    {
      name: "Cisco Certified Network Associate (CCNA) Routing and Switching (Cisco – 1003739529)",
      issuedBy: "CISCO",
      verificationURL:
        "https://www.credly.com/badges/5cdb9005-b7c2-4d42-8ea2-c4f496d4672a/linked_in",
    },
    {
      name: "Micro-frontends with React: a complete developers guide – Udemy.",
      issuedBy: "Udemy",
      verificationURL:
        "https://www.udemy.com/certificate/UC-611db799-52d5-4d52-9597-e6b85c0d7cbe/",
    },
  ],
  projects: [
    {
      name: "VisionFundChatBot",
      imageUrl: tlgrmProjectBackGround,
      companyName: "VisionFund Microfinance",
      url: "https://t.me/VisionFundChatbot",
      description: [
        "a telegram bot to enable customers to use vision fund services trough telegram application",
      ],
      tags: ["Telegraf", "typescript","postgress"],
    },
    {
      name: "Telegram Ecommerce Bot",
      imageUrl: tlgrmProjectBackGround,
      companyName: "",
      url: "https://t.me/ChiricharoBot",
      description: [
        "still in development",
        "An e-commerce platform to enable users to use telegram bot to post, edit and delete a product for sale",
      ],
      tags: ["Telegraf", "typescript", "AWS CDK"],
    },
    {
      name: "Metro task management ",
      imageUrl: TaskManagementBackGround,
      companyName: "HURRICANE SUPPORT",
      url: "",
      description: [
        "A desktop and mobile application that enables assignment, delegation, completion, approval, and overall management of a task depending on the hierarchy and position of employees in the company.",
        "Still in development",
      ],
      tags: [
        "ReactJS",
        "CSS",
        "React Native",
        "Axios",
        "MaterialUI",
        "nodejs",
        "pouchDB",
        "CouchDB",
      ],
    },
    {
      name: "MuluG",
      imageUrl: MuluGProjectBackGround,
      companyName: "HURRICANE SUPPORT",
      url: "",
      description: [
        "A web application that enables a hospital to Register patients, Present information for patients, Receive a request from a patient, Follow up on patient, Receive payment from patients, and Que patents.",
        "still in development",
      ],
      tags: ["ReactJS", "MaterialUI", "GraphQL", "NodeJS", "Express", "JWT"],
    },
    {
      name: "spaceXrockets",
      imageUrl: spaceXlogo,
      companyName: "personal project",
      url: "https://spacex-rockets-5gj4.onrender.com",
      description: [
        "A web application that provides information about SpaceX launches",
      ],
      tags: [
        "ReactJS",
        "bootstrap",
        "NodeJS",
        "GraphQL",
        "Apolo",
        "Express",
        "spcex rockets API",
      ],
    },
    {
      name: "quize_app",
      imageUrl: "",
      companyName: "",
      url: "https://github.com/elezersolomon/quize_app",
      description: [
        "still in development",
        "a multi platform app that enables users to answer questions get score, choose question types",
      ],
      tags: ["flutter"],
    },
  ],
  goodByeText: "",
};

const getProfileData = () => profile;

export default getProfileData;
