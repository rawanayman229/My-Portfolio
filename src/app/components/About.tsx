'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TAB_DATA = [
{
    title: "Skills",
    id: "skills",
    content: (
    <ul className="list-disc pl-2 grid grid-cols-2 gap-x-6">
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Next JS</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>Git, GitHub</li>
        <li>Restful APIs</li>
    </ul>
    ),
},
{
    title: "Education",
    id: "education",
    content: (
    <ul className="list-disc pl-2">
        <li>Bachelor&apos;s Degree in Business Information Systems (BIS)</li>
        <li>Helwan University | Class of 2023</li>
</ul>
    ),
},
{
    title: "Certifications",
    id: "certifications",
    content: (
    <ul className="list-disc pl-2">
        <li>Full-Stack Web Development Diploma at Raya Academy - 2023</li>
        <li>Online Frontend Training at TechCell - 2024</li>
        <li>Worked as a volunteer FrontEnd mentor at HumaVolve organization</li>
        <li>Remote Internship at Elevvo for one month - 2025</li>
    </ul>
    ),
},
];

const TabButton = ({ active, selectTab, children }: { active: boolean, selectTab: () => void, children: React.ReactNode }) => {
const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
    </p>
    <motion.div
        animate={{ width: active ? "calc(100% - 0.75rem)" : 0 }}
        className="h-1 bg-purple-500 mt-1 mr-3"
    ></motion.div>
    </button>
);
};

const About = () => {
const [tab, setTab] = useState("skills");
const startTransition = useTransition()[1];

const handleTabChange = (id: string) => {
    startTransition(() => {
    setTab(id);
    });
};

return (
    <section id="about" className="py-24 text-white">
    <div className="container mx-auto px-6">
        <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
        <Image src="/images/about-image.png" alt="code design" width={500} height={500} className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg text-white/70">
            I am a motivated and detail-oriented Front-End web Developer with strong
            knowledge of modern web development technologies. Experienced in
            building responsive, dynamic web applications using HTML5, CSS3,
            JavaScript, Bootstrap, React.js, Next.js, Tailwind CSS, and
            TypeScript. Skilled in both collaborative and independent
            environments with a passion for clean UI and intuitive UX
            </p>
            <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
            </div>
            <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default About;