import { nanoid } from "nanoid";
import { FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-cyan-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-cyan-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-cyan-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "CoreJava",
    icon: <FaJava className="h-16 w-16 text-cyan-500" />,
    text: "Proficient in Core Java, with experience in developing robust and scalable applications. Skilled in object-oriented programming, multithreading, and Java Collections Framework.",
  },
  {
    id: nanoid(),
    title: "SpringBoot",
    icon: <SiSpringboot className="h-16 w-16 text-cyan-500" />,
    text: "Proficient in developing scalable and modular applications using Spring Boot. Experienced in building RESTful APIs with integration of Spring Data, Spring Security, and Spring MVC.",
  },
  {
    id: nanoid(),
    title: "Hibernate",
    icon: <SiHibernate className="h-16 w-16 text-cyan-500" />,
    text: "Skilled in Hibernate ORM for efficient database interaction and object-relational mapping. Experienced in writing HQL queries, managing relationships, and optimizing database performance.",
  },
 
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "#",
    github: "#",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "#",
    github: "#",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "#",
    github: "#",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
