import FishPortMS from "../assets/projects/FishPortMS.png";
import AngularToDo from "../assets/projects/AngularToDo.png";
import AngularToDoVideo from "../assets/projects/AngularVid.mp4";

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
    videoURL:'/echo-portfolio/src/assets/projects/JOMARDEMO.mp4',
    description:
      "A Progressive Web App (PWA) that digitizes and streamlines fish port operations such as transactions and reporting. It supports real-time monitoring, secure role-based access, and can be installed on any device like a native app for convenient.",
    technologies: ["C#", ".NET", "MSSQL", "Blazor", "MudBlazor", "Azure", "JWT", "Cookies", "Blob"],
  },
  {
    title: "TODO App",
    image: AngularToDo,
    videoURL:'/echo-portfolio/src/assets/projects/AngularVid.mp4',
    description:
      "This is a full-stack Todo application developed as a learning project to strengthen my skills in Angular, .NET, and SQL Server. The frontend is built with Angular to explore core concepts such as components, data binding, directives, services, and routing. The backend is implemented using .NET, providing RESTful APIs for task management, while data is stored and managed in a Microsoft SQL Server (MSSQL) database. The main goal of this project is to gain hands-on experience in building and integrating a complete web application from frontend to backend.",
    technologies: ["C#", ".NET", "MSSQL", "Angular", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "Navotas City, Philippines",
  phoneNo: "+639542435314",
  email: "jerichoeugenio2@gmail.com",
};
