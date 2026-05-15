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
        <li>Flutter</li>
        <li>Dart</li>
        <li>Firebase</li>
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
    title: "Experiences & Internships",
    id: "Experiences & Internships",
    content: (
    <ul className="list-disc pl-2">
        <li>Front-End Web Developer at Deltana Group Company</li>
        <li>Technical Support-Web Hosting at Affsquare (Thamara Cloud Project)</li>
        <li>Full-Stack Web Development Diploma at Raya Academy</li>
        <li>Remote Internship at TechCell </li>
        <li>Remote Internship at Elevvo</li>
        <li>FrontEnd mentor at HumaVolve organization</li>
        <li>Flutter Diploma at Amit Academy</li>
    </ul>
    ),
},
];

const TabButton = ({ active, selectTab, children }: { active: boolean, selectTab: () => void, children: React.ReactNode }) => {
const buttonClasses = active ? "text-gray-900 " : "text-gray-700";
return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-gray-900  ${buttonClasses}`}>
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
    <section id="about" className="py-24 text-gray-900 ">
    <div className="container mx-auto px-6">
        <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
        <Image src="/images/about-image.png" alt="code design" width={500} height={500} className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-gray-900  mb-4">About Me</h2>
            <p className="text-base lg:text-lg text-gray-900">
            I am a motivated and detail-oriented Front-End web Developer with strong
            knowledge of modern web development technologies. Experienced in
            building responsive, dynamic web applications using HTML5, CSS3,
            JavaScript, Bootstrap, React.js, Next.js, Tailwind CSS, and
            TypeScript, along with mobile applications using Flutter and Firebase.
            Skilled in both collaborative and independent
            environments with a passion for clean UI and intuitive UX
            </p>
            <div className="flex flex-row justify-start mt-8 ">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("Experiences & Internships")} active={tab === "Experiences & Internships"}>Experiences & Internships</TabButton>
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