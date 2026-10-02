import React from 'react';
import { Code, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  tags: string[];
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({ imgUrl, title, description, tags, gitUrl, previewUrl }: ProjectCardProps) => {
  return (
    <article className="group flex flex-col h-full w-full overflow-hidden rounded-xl bg-[#181818] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={`/${imgUrl}`}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#181818]/70 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
          <Link
            href={gitUrl}
            target="_blank"
            aria-label={`${title} source code`}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors"
          >
            <Code className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            aria-label={`${title} live demo`}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white transition-colors"
          >
            <Eye className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="text-white flex-grow py-5 px-5 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#ADB7BE] flex-grow">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="rounded-full bg-purple-500/20 text-purple-200 text-xs font-medium px-3 py-1">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
