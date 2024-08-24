import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImag from "../assets/hero.svg";
const Title = () => {
  return (
    <div className="bg-purple-100 gap-x-40 py-24 px-5">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-6xl font-bold tracking-wider">
            I'm Karthik Baswaraju
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide ">
            FullStack Java Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide ">
            Turning ideas into reality
          </p>
          <div className="flex gap-x-3 mt-3">
            <a href="https://github.com/Karthik141814">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/karthik-baswaraju">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaInstagramSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaFacebookSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block w-40 h-100" >
          <img src={heroImag} alt="your image" />
        </article>
      </div>
    </div>
  );
};

export default Title;
