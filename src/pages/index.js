import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";

import GithubIcon from "../components/icons/Githup";

import LinkedinIcon from "../components/icons/Linkedin.js";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "React Developer",
          2000,
          "Frontend Developer",
          2000,
          "Software Developer",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);
export default function Home() {
  return (
    <Layout title={"MPSOFTWAREDEV"} description={"My Portfolio"}>
      <motion.img
        src="/images/ball1.svg"
        alt="ball1"
        className="hidden md:block h-auto w-96 absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/ball2.svg"
        alt="ball2"
        className="hidden md:block h-auto w-96 absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Meltem Pinar
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-orange-500 via-indigo-400 to-blue-400 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/MeltemPinar"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-slate-300 transition-colors duration-300 dark:text-gray-300 dark:hover:text-indigo-500 hover:text-indigo-500 "
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/meltempinar//"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-indigo-500 hover:text-indigo-500 "
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-orange-300">Todo:</span> You can drag
                    these balloons I'm really in love with them
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/unnamed.jpg"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-orange-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-orange-300">1</span> =
                        ["HTML", "CSS", "SASS", "BOOTSTRAP", "TAILWINDCSS"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-orange-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-orange-300">2</span> =
                        ["Reactjs", "Nextjs", "Expressjs", "Nodejs"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8  ">
                    <Link
                      href="/projects"
                      className="transition duration-300 text-indigo-300"
                    >
                      Projects
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
