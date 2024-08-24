import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="" className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose ">
          Hi, I'm Karthik Baswaraju! I have 2+ years of experience in Core JAVA, JavaScript, HTML5, CSS, JSP, Spring MVC, Spring Boot and ReactJS. I enjoy creating user-friendly websites and apps. My skills in Core help me build quality software. With ReactJS, I design interactive interfaces for a better user experience. Java allows me to develop strong backend systems. I stay updated on tech trends. Let's connect and work together on exciting projects in AI!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
