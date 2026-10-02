'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const stats = [
  { value: '7+', label: 'Projects built' },
  { value: '3+', label: 'Internships & roles' },
  { value: '2', label: 'Platforms: Web & Mobile' },
];

const Hero = () => {
  return (
    <section id="home" className="pt-36 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to work
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Hello, I&apos;m
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Rawan Ayman', 1500,
                  'Front-End Developer', 1500,
                  'React & Next.js Specialist', 1500,
                  'Flutter Developer', 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-800 mt-5 text-lg max-w-xl">
              I build fast, responsive and accessible web apps with React, Next.js and TypeScript —
              and cross-platform mobile apps with Flutter. Clean UI, clean code, great UX.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => document.getElementById('email')?.focus({ preventScroll: true }), 700);
                }}
                className="rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white font-semibold px-7 py-3 shadow-lg hover:scale-105 transition-transform"
              >
                Contact Me
              </Link>
              <Link
                href="/Rawan-Ayman-CV.pdf"
                target="_blank"
                className="rounded-full border-2 border-purple-600 text-gray-900 font-semibold px-7 py-3 hover:bg-white/60 transition-colors"
              >
                Download CV
              </Link>
              <div className="flex gap-3 ml-1">
                <Link href="https://github.com/rawanayman229" target="_blank" aria-label="GitHub">
                  <Github className="w-7 h-7 text-gray-800 hover:text-purple-600 transition-colors" />
                </Link>
                <Link href="https://www.linkedin.com/in/rawan-ayman-891000277/" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="w-7 h-7 text-gray-800 hover:text-purple-600 transition-colors" />
                </Link>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-3xl font-extrabold text-gray-900">{s.value}</dt>
                  <dd className="text-sm text-gray-700">{s.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="rounded-full p-1.5 bg-gradient-to-br from-purple-600 to-pink-500 shadow-2xl shadow-purple-500/30">
              <div className="relative overflow-hidden w-72 h-72 md:w-80 md:h-80 rounded-full bg-white/40">
                <Image
                  src="/images/hero-image.png"
                  alt="Rawan Ayman"
                  width={400}
                  height={400}
                  priority
                  className="z-10 object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
