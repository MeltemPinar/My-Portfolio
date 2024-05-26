import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({
  project: { title, description, image, source, tags },
}) => {
  return (
    <div className="flex row-auto w-100 border-none align-content-center justify-between">
      <motion.a
        href={source}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#e4ae75] via-[#83a5db] to-[#4840ec] p-1 hover:cursor-pointer shadow-lg"
        whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.4 } }}
      >
        <div className=" flex flex-col col-3 w-full h-full p-1 bg-white rounded-lg dark:bg-gray-900 mt-3">
          <div className=" flex flex-col flex-1 items-center justify-between space-y-3  ">
            <div>
              <img
                src={image.url}
                alt={title}
                className="object-cover w-full rounded-lg h-100 py-10"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {title}
              </h2>
              <p className="text-md">{description}</p>
            </div>

            <div className=" overflow-hidden w-full flex flex-col justify-end py-3 px-7 items-center top-10 space-x-1 space-y-3">
              {tags.map((tag, key) => (
                <span
                  key={key}
                  className=" inline-fiex flex-col items-center justify-center px-3 py-1 text-xs font-bold leading-none text-pink-100 bg-orange-500 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default ProjectCard;
