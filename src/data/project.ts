import { projectInterface } from "@/types";
import food1 from "@/assets/images/food1.jpg";
import food2 from "@/assets/images/food2.jpg";
import food3 from "@/assets/images/food3.jpg";
import hotel1 from "@/assets/images/hotel1.jpg";
import hotel2 from "@/assets/images/hotel2.jpg";
import hotel3 from "@/assets/images/hotel3.jpg";
import class1 from "@/assets/images/class1.jpg";
import class2 from "@/assets/images/class2.jpg";
import class3 from "@/assets/images/class3.jpg";
import task1 from "@/assets/images/task1.jpg";
import task2 from "@/assets/images/task2.jpg";
import task3 from "@/assets/images/task3.jpg";
import building1 from "@/assets/images/building1.jpg";
import building2 from "@/assets/images/building2.jpg";
import building3 from "@/assets/images/building3.jpg";
export const projectData: projectInterface[] = [
  {
    id: 1,
    name: "Food Ordering Website",
    title: "Building a Fullstack Website for food delivery",
    description:
      "This project is a comprehensive Food Ordering Website designed to simplify the process of browsing, ordering, and managing food orders online. The platform enables users to explore a wide variety of dishes, place orders seamlessly, and enjoy a streamlined experience tailored for both customers and administrators. The website includes features like managing user accounts, updating food items, and tracking order statuses. For administrators, it offers tools to analyze sales trends, manage discounts, and ensure the availability of popular food items. The project also incorporates secure deployment practices and efficient data handling, making it a reliable solution for food delivery businesses. With its focus on usability and functionality, the Food Ordering Website showcases the potential of web technology to improve everyday experiences, catering to the dynamic needs of both users and business owners.",
    technologies: {
      title:
        "This project leverages a combination of modern technologies and tools to deliver a robust, secure, and scalable Food Ordering Website:",
      data: [
        {
          name: "Front-End",
          technologies: [
            "JavaScript",
            "Bootstrap 5",
            "Chart.js",
            "PHPMailer",
            "DomPDF",
            "And many more...",
          ],
        },
        {
          name: "Back-End",
          technologies: ["PHP", "MySql", "And many more..."],
        },
        {
          name: "Deployment",
          technologies: [
            "Server: Linux (Ubuntu)",
            "Web Server: Nginx",
            "Security: Configured TSL/SSL via Cloudflare",
            "File Transfer: FileZilla for efficient file uploads and management",
            "And many more...",
          ],
        },
      ],
    },
    functionality: [
      {
        name: "CRUD Operations:",
        functionalities: [
          "Manage food items, user accounts, and receipts seamlessly.",
          "Administrative features allow for easy updates and maintenance.",
          "And many more...",
        ],
      },
      {
        name: "User Features:",
        functionalities: [
          "Reset passwords via email using a secure and automated process.",
          "Browse and order food items with dynamic filtering and sorting options.",
          "And many more...",
        ],
      },
      {
        name: "Statistical Insights:",
        functionalities: [
          "Automatic revenue tracking and real-time statistics.",
          "Analysis of the most popular food items, providing valuable insights.",
          "Generate professional PDF reports for orders, revenues, and more.",
          "And many more...",
        ],
      },
      {
        name: "Administrative Tools:",
        functionalities: [
          "Discount management system for promotions and offers.",
          "Food status management to update availability dynamically.",
          "And many more...",
        ],
      },
    ],
    year: "2024",
    numberOfMembers: "01",
    githubLink: "https://github.com/ADDuongg/Food_Ordering",
    demoLink: "https://pizzarun.online",
    image: [food1, food2, food3],
  },

  {
    id: 2,
    name: "Hotel Management Website",
    title: "Building a Fullstack Website For HT Hotel",
    description:
      "The Hotel Advertising Website is a personal project aimed at promoting a hotel in Cat Ba. This project showcases an integrated platform with both frontend and backend functionalities, designed for room rentals, post interaction, and effective content management. It highlights the use of modern web technologies and deployment strategies.",
    technologies: {
      title:
        "This project leverages a combination of modern technologies and tools to deliver a robust, secure, and scalable Hotel Management Website:",
      data: [
        {
          name: "Front-End",
          technologies: [
            "ReactJS",
            "Axios",
            "js-cookie",
            "react-quill",
            "sweetalert",
            "And many more...",
          ],
        },
        {
          name: "Back-End",
          technologies: [
            "PHP",
            "MySql",
            "Laravel",
            "Sanctum Package",
            "PHPMyadmin",
            "And many more...",
          ],
        },
        {
          name: "Deployment",
          technologies: [
            "Server: Linux (Ubuntu)",
            "Web Server: Nginx",
            "Security: Configured TSL/SSL via Cloudflare",
            "File Transfer: FileZilla for efficient file uploads and management",
            "And many more...",
          ],
        },
      ],
    },
    functionality: [
      {
        name: "CRUD Operations:",
        functionalities: [
          "Comprehensive management of rooms, blog posts, comments, and hotel facilities.",
          "Admin-friendly features for easy updates and maintenance.",
          "And many more...",
        ],
      },
      {
        name: "Room Rental System:",
        functionalities: [
          "Users can explore room options and proceed with secure bookings.",
          "Backend authentication to verify room rental details and prevent fraudulent transactions.",
          "And many more...",
        ],
      },
      {
        name: "User Interaction:",
        functionalities: [
          "Commenting system on posts to enhance engagement and feedback.",
          "Real-time updates for user actions like posting and commenting.",
          "And many more...",
        ],
      },
      {
        name: "Secure Authentication:",
        functionalities: [
          "Implemented using Laravel Sanctum for token-based authentication.",
          "Protects user sessions and data during room rentals and post interactions.",
          "And many more...",
        ],
      },
    ],
    year: "2024",
    numberOfMembers: "01",
    githubLink: {
        frontEnd: "https://github.com/ADDuongg/hotel",
        backEnd: "https://github.com/ADDuongg/api_hotel",
    },
    demoLink: "https://hotelmanagement.online",
    image: [hotel1, hotel2, hotel3],
  },

  {
    id: 3,
    name: "Google classroom Clone",
    title: "Clone Classroom Management Website",
    description:
      "The Google Classroom Clone project is a personal self-learning initiative to build a simplified version of Google Classroom. The platform is designed to replicate core features, focusing on class management, student and teacher interactions, and assignment submissions. It is an educational tool intended to streamline communication and workflow within online learning environments.",
    technologies: {
      title:
        "This project leverages a combination of modern technologies and tools to deliver a robust, secure, and scalable Google Classroom Clone:",
      data: [
        {
          name: "Front-End",
          technologies: [
            "JavaScript",
            "Bootstrap 5",
            "Fetch API",
            "And many more...",
          ],
        },
        {
          name: "Back-End",
          technologies: [
            "PHP",
            "MySql",
            "Laravel",
            "Sanctum Package",
            "PHPMyadmin",
            "Querry Builder",
            "And many more...",
          ],
        },
        {
          name: "Deployment",
          technologies: [
            "Server: Linux (Ubuntu)",
            "Web Server: Nginx",
            "Security: Configured TSL/SSL via Cloudflare",
            "File Transfer: FileZilla for efficient file uploads and management",
            "And many more...",
          ],
        },
      ],
    },
    functionality: [
      {
        name: "CRUD Operations for Class Management:",
        functionalities: [
          "Teachers and admins can create, update, and delete classes, students, and teachers within the system. This allows for easy management of learning groups.",
          "And many more...",
        ],
      },
      {
        name: "Teacher Features:",
        functionalities: [
          "Teachers can publish posts within their assigned classes for announcements, instructions, and discussions.",
          "Teachers can create assignments for students with specific deadlines.",
          "Teachers can grade assignments submitted by students, providing feedback and scores.",
          "And many more...",
        ],
      },
      {
        name: "Student Features:",
        functionalities: [
          "Students can join classes by entering class codes, which links them to the appropriate group and course content.",
          "Students can submit assignments online, ensuring seamless digital submission for evaluation.",
          "Students can interact with posts made by teachers and their peers by commenting and creating their own posts.",
          "And many more...",
        ],
      },
      {
        name: "Communication Tools:",
        functionalities: [
          "Both students and teachers can comment on posts, creating an open space for collaboration and discussion within each class.",
          "And many more...",
        ],
      },
    ],
    year: "2024",
    numberOfMembers: "01",
    githubLink: "https://github.com/ADDuongg/Classroom_Clone",
    demoLink: "https://classroom.io.vn",
    image: [class1, class2, class3],
  },

  {
    id: 4,
    name: "Task Management Website",
    title:
      "Building a Fullstack Website for task management based on Redmine open source",
    description:
      "The Task Management website is a personal project inspired by the Redmine open-source task management platform. The goal of the project is to create a robust and interactive full-stack application that facilitates task tracking, user collaboration, and project management. The platform includes a variety of essential features to help teams and individuals efficiently manage their tasks while offering a modern, user-friendly interface.",
    technologies: {
      title:
        "This project leverages a combination of modern technologies and tools to deliver a robust, secure, and scalable Task Management Website:",
      data: [
        {
          name: "Front-End",
          technologies: [
            "ReactJS",
            "Next.js",
            "TypeScript",
            "Ant Design",
            "TailwindCSS",
            "Jotai",
            "Zod",
            "React-Query",
            "React-Hook-Form",
            "And many more...",
          ],
        },
        {
          name: "Back-End",
          technologies: [
            "Nextjs",
            "JWT",
            "Jose",
            "Socket.io",
            "SSR",
            "MongoDB",
            "Mongoose",
            "bcrypt",
            "Cloudinary",
            "And many more...",
          ],
        },
        {
          name: "Deployment",
          technologies: ["Not deployed yet"],
        },
      ],
    },
    functionality: [
      {
        name: "Task Management:",
        functionalities: [
          "Full create, read, update, and delete functionality for managing tasks, projects, and users.",
          "Users can assign tasks to one another, track the progress of tasks, and update task status.",
          "Users can log time spent on tasks, which can be tracked and reported.",
          "Tasks can be filtered and sorted based on various attributes like priority, status, and due date.",
          "And many more...",
        ],
      },
      {
        name: "Authentication System:",
        functionalities: [
          "JWT-based authentication for secure user login and account registration.",
          "Secure password reset functionality with JWT.",
          "Manage user sessions with JWT tokens, ensuring persistent login and secure data access.",
          "Role based access control for different user roles.",
          "And many more...",
        ],
      },
      {
        name: "Collaboration Features::",
        functionalities: [
          "Chat functionality powered by Socket.io allows users to communicate in real-time within the app.",
          "Users can toggle between dark and light mode to enhance their user experience.",
          "sers can upload profile images and project-related images to Cloudinary, making the interface more visually appealing.",
          "And many more...",
        ],
      },
      {
        name: "Project and User Management:",
        functionalities: [
          "Users can create, update, and manage projects.",
          "Users have personalized profiles with images, and they can update their details and manage tasks.",
          "Search functionality allows users to find specific tasks or projects easily, and advanced filtering options help in task management.",
          "And many more...",
        ],
      },
    ],
    year: "2024",
    numberOfMembers: "01",
    githubLink: "https://github.com/ADDuongg/task-management",
    demoLink: "",
    image: [task1, task2, task3],
  },

  {
    id: 5,
    name: "Tan Long Building Management",
    title: "Building a Fullstack Website For Tan Long Building Management",
    description:
      "The Tan Long Construction Management Website is a web application designed to provide comprehensive project management capabilities for construction projects. This personal project, developed for self-learning, aims to streamline the management of various construction-related tasks such as project tracking, contract management, personnel assignments, and more. The website serves as an all-in-one solution for managing construction projects, with features that facilitate both back-end and front-end data management, ensuring the efficient operation of Tan Long Construction Company.",
    technologies: {
        title: "This project leverages a combination of modern technologies and tools to deliver a robust, secure, and scalable Website:",
        data: [
            {
              name: "Front-End",
              technologies: ['ReactJS', 'Axios', 'Tanstack Query (React Query)', 'Bootstrap 5', 'react-toastify', 'react-csv', 'react-to-print', 'And many more...'],
            },
            {
                name: "Back-End",
                technologies: ["PHP", "MySql","Laravel", "Sanctum Package", "PHPMyadmin", "And many more..."],
            },
            {
                name: "Deployment",
                technologies: [
                    "Server: Linux (Ubuntu)",
                    "Web Server: Nginx",
                    "Security: Configured TSL/SSL via Cloudflare",
                    "File Transfer: FileZilla for efficient file uploads and management",
                    "And many more...",
                  ],
            },
          ]
    },
    functionality: [
      {
        name: "CRUD Operations:",
        functionalities: ['Full Create, Read, Update, Delete functionalities for managing essential data such as contracts, projects, project phases, clients, and contractors. These operations allow administrators to easily manage the entire lifecycle of construction projects.', 'And many more...'],
      },
      {
        name: "Project Phase Management:",
        functionalities: ['The ability to create detailed job lists for each project phase. This feature helps break down projects into manageable phases, making it easier to track progress and assign tasks to team members.', 'And many more...'],
      },
      {
        name: "Personnel Management:",
        functionalities: ['Assign personnel to specific project phases. This feature allows the project manager to manage who is working on what, ensuring that the right people are assigned to the appropriate tasks.', 'Employee attendance tracking ensures that project managers can monitor employee attendance and keep accurate records of working hours.', 'And many more...'],
      },
      {
        name: "Data Export:",
        functionalities: ['The system includes functionality to export data to Excel, making it easier to share reports and data with stakeholders.', 'And many more...'],
      },
    ],
    year: "2024",
    numberOfMembers: "01",
    githubLink: {
        frontEnd: "https://github.com/ADDuongg/FrontEnd_Construction",
        backEnd: "https://github.com/ADDuongg/api_construction",
    },
    demoLink: "https://tanlongbuilding.site",
    image: [building1, building2, building3],
  },
];
