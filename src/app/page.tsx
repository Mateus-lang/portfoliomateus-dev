"use client";

import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import MyProjects from "./components/ui/myprojects";
import Slider from "./components/ui/slider";

const Home = () => {
  return (
    <div className="items-center p-5 pt-20">
      <div className="flex flex-col items-center justify-center">
        <Image
          className="rounded-full border-4 border-white"
          src="/perfil.png"
          alt="imagen de perfil"
          width={200}
          height={300}
        />
        <h1 className="mt-4 text-center text-2xl font-bold">
          Olá, sou <span className="text-blue-500">Mateus Almeida</span> <br />{" "}
          Desenvolvedor de Software
        </h1>
        <p className="px-6 pt-3 text-center text-sm">
          Sou programador, apaixonado por programação, ciência e tecnologia.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/dev.mts/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram
              size={40}
              className="transition-colors hover:text-pink-500"
            />
          </a>

          <a
            href="https://github.com/Mateus-lang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              size={40}
              className="transition-colors hover:text-gray-500"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mateus-almeida-b9b614214/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              size={40}
              className="transition-colors hover:text-blue-500"
            />
          </a>
        </div>

        {/* slider section */}
        <Slider />

        <MyProjects />
      </div>
    </div>
  );
};

export default Home;
