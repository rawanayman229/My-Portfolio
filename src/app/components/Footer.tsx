import React from 'react';
import Link from 'next/link';
import  Image  from 'next/image';

const Footer = () => {
return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div className="container p-12 flex justify-between">
    <Link href="/" className="text-2xl font-bold text-white">
    <Image
        src="/logo.png"
        alt="Logo"
        width={70}  
        height={70}
        />
        </Link>
         <p className="text-slate-600">  © {new Date().getFullYear()} All rights reserved.</p>
    </div>
    </footer>
);
};

export default Footer;