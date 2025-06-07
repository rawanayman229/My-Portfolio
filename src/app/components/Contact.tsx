'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import { sendEmail } from '@/app/actions/sendEmail'; 

const Contact = () => {
const [status, setStatus] = useState<'success' | 'error' | 'sending' | null>(null);

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.success) {
    setStatus('success');
    event.currentTarget.reset(); 
    } else {
    setStatus('error');
    }
};

return (
    <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
            <h5 className="text-3xl font-bold text-white my-2">Contact Me:</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll try my
            best to get back to you!
            </p>
            <h5 className="text-xl font-bold text-white my-2">
            Connect with me on social media:
            </h5>
            <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/rawanayman229" target="_blank">
                <Github className="w-8 h-8 text-gray-500 hover:text-pink-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/rawan-ayman-891000277/" target="_blank">
                <Linkedin className="w-8 h-8 text-gray-500 hover:text-pink-500" />
            </Link>
            <Link href="https://www.instagram.com/rooney.artist/" target="_blank">
                <Instagram className="w-8 h-8 text-gray-500 hover:text-pink-500" />
            </Link>
            </div>
        </div>
        <div>
        
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                <input
                type="email"
                id="email"
                name="email" 
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@gmail.com"
                />
            </div>
            <div>
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                <input
                type="text"
                id="subject"
                name="subject" 
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
                />
            </div>
            <div>
                <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">Message</label>
                <textarea
                id="message"
                name="message" 
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
                />
            </div>
            <button
                type="submit"
                disabled={status === 'sending'} 
                className="font-semibold bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 text-white transition-transform py-2.5 px-5 rounded-lg w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
              {/* Feedback messages */}
            {status === 'success' && (
                <p className="text-green-500 text-sm mt-2">
                Message sent successfully! I&apos;ll get back to you soon.
                </p>
            )}
            {status === 'error' && (
                <p className="text-red-500 text-sm mt-2">
                Something went wrong. Please try again later.
                </p>
            )}
            </form>
        </div>
        </div>
    </div>
    </section>
);
};

export default Contact;