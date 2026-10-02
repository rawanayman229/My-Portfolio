'use client';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projectsData = [
      {
    id: 7,
    title: "Taste Flow - Restaurant Website",
    description: "A restaurant management system that turns every table into an ordering counter: QR menu, live order tracking, kitchen display, and card payments",
    tags: ["React.js", "Tailwind CSS", "PostgreSQL"],
    image: "projects/7.jpg",
    gitUrl: "",
    previewUrl: "https://www.taste-flow.com/",
  },
  {
    id: 1,
    title: "Stream-Vibe Movies Website",
    description: "Discover new releases and trending movies, and watch trailers. Data is fetched from the TMDB API with Supabase handling the backend.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "TMDB API"],
    image: "projects/1.png",
    gitUrl: "https://github.com/rawanayman229/Stream-Vibe",
    previewUrl: "https://stream-vibe-sepia.vercel.app/",
  },
  {
    id: 2,
    title: "Job Application Tracker",
    description: "Track job applications across stages in one place, with predictable global state management and a fully typed codebase.",
    tags: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    image: "projects/2.png",
    gitUrl: "https://github.com/rawanayman229/Job-Application-Tracker",
    previewUrl: "https://job-application-tracker-rawan-ayman.vercel.app/",
  },
  {
    id: 5,
    title: "E-Learning Platform",
    description: "An educational platform with a clean, responsive learning experience built on the Next.js App Router.",
    tags: ["Next.js", "TypeScript"],
    image: "projects/5.png",
    gitUrl: "https://github.com/rawanayman229/Educational-platform",
    previewUrl: "https://educational-platform-chi.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "Search any city and see live weather conditions, using the OpenWeatherMap API with vanilla JavaScript.",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    image: "projects/4.png",
    gitUrl: "https://github.com/rawanayman229/Weather-Dashboard-App",
    previewUrl: "https://rawanayman229.github.io/Weather-Dashboard-App/",
  },
  {
    id: 6,
    title: "Sportive Website",
    description: "A modern, fully responsive storefront for high-quality fitness clothing.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "projects/6.jpg",
    gitUrl: "https://github.com/rawanayman229/Sportive-Website",
    previewUrl: "https://rawanayman229.github.io/Sportive-Website/",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-gray-900">My Projects</h2>
        <div className="mx-auto mt-3 mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
        <p className="text-center text-gray-800 mb-10 max-w-xl mx-auto">
          A selection of web apps I&apos;ve built. Hover a card to view the code or the live demo.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
