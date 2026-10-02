import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="Home">
            <Image src="/logo.png" alt="Rawan Ayman logo" width={48} height={48} />
          </Link>
          <nav aria-label="Main">
            <ul className="flex items-center gap-4 sm:gap-8 text-gray-800 font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-purple-600 transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/Rawan-Ayman-CV.pdf"
                  target="_blank"
                  className="rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white px-4 py-1.5 text-sm hover:scale-105 transition-transform inline-block"
                >
                  Résumé
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
