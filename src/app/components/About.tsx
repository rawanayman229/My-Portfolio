'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  { title: "Frontend", items: ["HTML5 / CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Mobile", items: ["Flutter", "Dart", "Firebase"] },
  { title: "Backend & Tools", items: ["Node.js", "MongoDB", "REST APIs", "Git & GitHub"] },
];

const EXPERIENCE = [
  { role: "Front-End Web Developer", org: "Deltana Group Company" },
  { role: "Technical Support – Web Hosting", org: "Affsquare (Thamara Cloud Project)" },
  { role: "Front-End Mentor", org: "HumaVolve organization" },
  { role: "Remote Internship", org: "Elevvo" },
  { role: "Remote Internship", org: "TechCell" },
  { role: "Full-Stack Web Development Diploma", org: "Raya Academy" },
  { role: "Flutter Diploma", org: "Amit Academy" },
];

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="space-y-4">
        {SKILL_GROUPS.map((g) => (
          <div key={g.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700 mb-2">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-gray-900 shadow-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ol className="relative border-l-2 border-purple-400 ml-2 space-y-4">
        {EXPERIENCE.map((e, i) => (
          <li key={i} className="pl-5 relative">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-500" />
            <p className="font-semibold text-gray-900">{e.role}</p>
            <p className="text-sm text-gray-700">{e.org}</p>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="border-l-2 border-purple-400 ml-2 pl-5 relative">
        <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-purple-600 to-pink-500" />
        <p className="font-semibold text-gray-900">B.Sc. in Business Information Systems (BIS)</p>
        <p className="text-sm text-gray-700">Helwan University · Class of 2023</p>
      </div>
    ),
  },
];

const TabButton = ({ active, selectTab, children }: { active: boolean; selectTab: () => void; children: React.ReactNode }) => (
  <button onClick={selectTab} role="tab" aria-selected={active} className="cursor-pointer">
    <p className={`mr-5 font-semibold transition-colors hover:text-gray-900 ${active ? "text-gray-900" : "text-gray-700"}`}>
      {children}
    </p>
    <motion.div
      animate={{ width: active ? "calc(100% - 1.25rem)" : 0 }}
      className="h-1 bg-purple-500 mt-1 mr-5"
    />
  </button>
);

const About = () => {
  const [tab, setTab] = useState("skills");

  return (
    <section id="about" className="py-24 text-gray-900">
      <div className="container mx-auto px-6">
        <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
          <Image src="/images/about-image.png" alt="Illustration of a developer workspace" width={500} height={500} className="rounded-lg" />
          <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            <div className="mt-3 mb-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
            <p className="text-base lg:text-lg text-gray-800">
              I&apos;m a detail-oriented Front-End Developer who enjoys turning ideas into polished,
              intuitive interfaces. I work with the React ecosystem and TypeScript on the web and
              Flutter on mobile, and I care about clean code, accessibility and performance.
              I&apos;m comfortable both collaborating in a team and owning features independently.
            </p>
            <div role="tablist" className="flex flex-row flex-wrap justify-start mt-8">
              {TAB_DATA.map((t) => (
                <TabButton key={t.id} selectTab={() => setTab(t.id)} active={tab === t.id}>
                  {t.title}
                </TabButton>
              ))}
            </div>
            <div className="mt-6" role="tabpanel">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
