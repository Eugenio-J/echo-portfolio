import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import FishPortMS from "../assets/projects/FishPortMS.png";

export const HERO_CONTENT = `I am Software developer with over a year of experience contributing to four projects. Skilled in ASP.NET Core, C#, Blazor, Entity Framework Core, and MSSQL, specializing in RESTful API development, database optimization with LINQ, and real-time updates using SignalR. Experienced in performance optimization with caching strategies and enhancing UI/UX with MudBlazor. Passionate about building efficient, scalable solutions and collaborating in Agile environments.`;

export const EXPERIENCES = [
  {
    year: "Nov 2023 - April 2025",
    role: "Junior Software Developer",
    company: "Simplified Business Consultancy",
    description: `Developed scalable web applications using ASP.NET Core, C#, Blazor, and Entity Framework Core. I built RESTful APIs, optimized databases with MSSQL and LINQ, implemented real-time updates using SignalR, and improved performance with caching strategies. Handled both backend and frontend tasks, collaborated with clients to meet evolving requirements, and ensured efficient, high-quality solutions in an Agile environment."`,
    technologies: ["C#", ".NET", "Blazor", "MSSQL", "Javascript", "Mudblazor", "HTML", "CSS", ],
  },
  {
  year: "April 2025 - Present",
    role: "Software Engineer",
    company: "Arch Global Services Inc. (Philippines)",
    description: `As a Software Developer, I work within an Agile Scrum team, actively participating in daily stand-up meetings to provide task updates and ensure alignment with sprint goals. I collaborate closely with cross-functional teams to deliver scalable and high-quality solutions. Most of our operations heavily rely on SQL, where I write optimized queries and perform data operations using Entity Framework Core with LINQ. I also prepare and deploy SQL scripts across various environments to maintain data consistency and integrity. On the front end, I develop responsive and dynamic user interfaces using Blazor, contributing to a seamless and efficient user experience. Additionally, I manage source code through Git, ensuring effective version control and collaborative development.`,
    technologies: ["C#", ".NET", "MSSQL",  "Blazor", "Mudblazor"],
  },  
];

export const PROJECTS = [
  {
    title: "Fishport Management System",
    image: FishPortMS,
    description:
      "A Progressive Web App (PWA) that digitizes and streamlines fish port operations such as transactions and reporting. It supports real-time monitoring, secure role-based access, and can be installed on any device like a native app for convenient.",
    technologies: ["C#", ".NET", "MSSQL", "Blazor", "MudBlazor", "Azure", "JWT", "Cookies", "Blob"],
  },
];

export const CONTACT = {
  address: "Navotas City, Philippines",
  phoneNo: "+639542435314",
  email: "jerichoeugenio2@gmail.com",
};
