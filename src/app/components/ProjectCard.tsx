import React from 'react';
import { Code, Eye } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
imgUrl: string;
title: string;
description: string;
gitUrl: string;
previewUrl: string;
}

const cardVariants = {
initial: { y: 50, opacity: 0 },
animate: { y: 0, opacity: 1 },
};

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) => {
return (
    <motion.div variants={cardVariants}>
    <div className="h-52 md:h-72 rounded-xl relative group overflow-hidden">
        <div
        className="w-full h-full absolute top-0 left-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-100 group-hover:blur-sm"
        style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>

        <div className="overlay absolute top-0 left-0 w-full h-full  bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80 transition-all duration-500 ease-in-out">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
          >
            <Code className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-colors duration-300" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
          >
            <Eye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>

      <div className="text-white  min-h-[150px]  rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;