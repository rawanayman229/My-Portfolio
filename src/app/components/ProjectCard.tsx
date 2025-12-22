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
    <motion.div 
      variants={cardVariants}
      className="flex flex-col h-full w-full" // Ensures the card takes full width of grid cell
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl group">
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-[2px]"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>

        {/* Overlay */}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-70 transition-all duration-500 ease-in-out">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
          >
            <Code className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
          >
            <Eye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Content Container */}
      <div className="text-white flex-grow rounded-b-xl bg-[#181818] py-6 px-4 flex flex-col">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] flex-grow line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;