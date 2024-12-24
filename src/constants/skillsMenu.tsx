import { SkillsMenuInterface } from "@/types";
import reactjsImage from "@/assets/images/reactjs.png";
import nodejsImage from "@/assets/images/nodejs.png";
import mongodbImage from "@/assets/images/mongodb.png";
import phpImage from "@/assets/images/php.png";
import laravelImage from "@/assets/images/laravel.png";
import javascriptImage from "@/assets/images/javascript.png";
import typescriptImage from "@/assets/images/typescript.png";
import nextjsImage from "@/assets/images/nextjs.png";
import socketioImage from "@/assets/images/socketio.png";
import linuxImage from "@/assets/images/linux.png";
import gitImage from "@/assets/images/git.png";
import mysql from "@/assets/images/mysql.png";
import reduxImage from "@/assets/images/redux.png";
import antDesignImage from "@/assets/images/antd.png";
import bootstrapImage from "@/assets/images/bootstrap.png";
import tailwindcssImage from "@/assets/images/tailwindcss.png";
import reactQueryImage from "@/assets/images/react-query.png";
export const skillsMenu: SkillsMenuInterface[] = [
  {
    key: "react",
    label: "ReactJS",
    description:
      "ReactJS is a JavaScript library for building user interfaces.",
    image: reactjsImage,
  },
  {
    key: "node",
    label: "NodeJS",
    description:
      "NodeJS is a JavaScript runtime environment that can execute JavaScript code outside a browser.",
    image: nodejsImage,
  },
  {
    key: "mongodb",
    label: "MongoDB",
    description:
      "MongoDB is a document-oriented database management system designed for scalability and ease of use.",
    image: mongodbImage,
  },
  {
    key: "php",
    label: "PHP",
    description:
      "PHP is a server-side scripting language designed for web development, but can also be used as a general-purpose programming language.",
    image: phpImage,
  },
  {
    key: "laravel",
    label: "Laravel",
    description:
      "Laravel is a free, open-source PHP web framework that is designed for building web applications with elegance and simplicity.",
    image: laravelImage,
  },
  {
    key: "javascript",
    label: "JavaScript",
    description:
      "JavaScript is a high-level, interpreted programming language that is primarily used for web development.",
    image: javascriptImage,
  },
  {
    key: "typescript",
    label: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds optional static typing to the language.",
    image: typescriptImage,
  },
  {
    key: "nextjs",
    label: "NextJS",
    description:
      "NextJS is a React framework for building server-side rendered applications.",
    image: nextjsImage,
  },
  {
    key: "socketio",
    label: "SocketIO",
    description:
      "SocketIO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers.",
    image: socketioImage,
  },
  {
    key: "linux",
    label: "Linux",
    description:
      "Linux is a free and open-source operating system that is widely used in servers, desktops, and embedded systems.",
    image: linuxImage,
  },
  {
    key: "git",
    label: "Git",
    description:
      "Git is a distributed version control system that is widely used for software development.",
    image: gitImage,
  },
  {
    key: "mysql",
    label: "MySQL",
    description:
      "MySQL is a free and open-source relational database management system that is widely used for web applications.",
    image: mysql,
  },
  {
    key: "redux",
    label: "Redux",
    description:
      "Redux is a predictable state container for JavaScript applications that is widely used for building complex web applications.",
    image: reduxImage,
  },
  {
    key: "antdesign",
    label: "Ant Design",
    description:
      "Ant Design is a design system for building user interfaces with React.",
    image: antDesignImage,
  },
  {
    key: "bootstrap",
    label: "Bootstrap",
    description:
      "Bootstrap is a free and open-source front-end framework for building responsive, mobile-first websites.",
    image: bootstrapImage,
  },
  {
    key: "tailwindcss",
    label: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that is widely used for building user interfaces.",
    image: tailwindcssImage,
  },
  {
    key: "react-query",
    label: "React Query",
    description:
      "React Query is a library for fetching and caching data in React applications.",
    image: reactQueryImage,
  },
];
