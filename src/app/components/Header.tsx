import React from 'react';
import Link from 'next/link';
import  Image  from 'next/image';

const Header = () => {
return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/50 backdrop-blur-md">
    <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <Link href="/" className="text-2xl font-bold text-white">
            <Image
                src="/logo.png"
                alt="Logo"
                width={60}  
                height={60}
                />
        </Link>
        <nav>
            <ul className="flex space-x-8 text-white/80">
            <li><Link href="#about" className="hover:text-white transition-colors duration-300">About</Link></li>
            <li><Link href="#projects" className="hover:text-white transition-colors duration-300">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
        </nav>
        </div>
    </div>
    </header>
);
};

export default Header;