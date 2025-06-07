'use client';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projectsData = [
{
    id: 1,
    title: "Stream-Vibe Movies Website",
    description: "A movie website to watch new release and trending movies trailer. Technologies: Next JS, Tailwind CSS, Supabase, TMDB API.",
    image: "projects/1.png",
    gitUrl: "https://github.com/rawanayman229/Stream-Vibe",
    previewUrl: "https://stream-vibe-three.vercel.app"
},
{
    id: 2,
    title: "React JS Restaurant Website",
    description: "Upper-Class Restaurant you can book a table or see the menu. Technologies: React JS, TypeScript, Tailwind CSS.",
    image: "projects/2.png",
    gitUrl: "https://github.com/rawanayman229/Restaurant-Nique",
    previewUrl: "https://nique-restaurant.vercel.app/",
},
{
    id: 3,
    title: "React JS Pet-Store Website",
    description: "A pet store for pets selling and supplies. Technologies: React JS , TypeScript and Tailwind CSS.",
    image: "projects/3.png",
    gitUrl: "https://github.com/rawanayman229/Pet-Store-App",
    previewUrl: "https://monito-pet-store-alpha.vercel.app/",
},
{
    id: 4,
    title: "Calculator App",
    description: "Simple calculator using HTML, CSS and JavaScript.",
    image: "projects/4.png",
    gitUrl: "https://github.com/rawanayman229/Calculator-Project",
    previewUrl: "https://rawanayman229.github.io/Calculator-Project/",
},
{
    id: 5,
    title: "Weather App",
    description: "Weather app using HTML, CSS and JavaScript.",
    image: "projects/5.png",
    gitUrl: "https://github.com/rawanayman229/Weather-App",
    previewUrl: "https://rawanayman229.github.io/Weather-App/",
}
];

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

const Projects = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true });

return (
    <section ref={ref} id="projects" className="py-24">
    <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
        </h2>
        <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-3 gap-8 md:gap-12 mt-8"
        >
        {projectsData.map((project, index) => (
            <motion.div
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
            <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
            </motion.div>
        ))}
        </motion.div>
    </div>
    </section>
);
};

export default Projects;