import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="bg-green-300 p-5 h-20">
          <div className="container mx-auto flex gap-5">
            <Link className="font-bold text-black text-xl" href="/">
              Home
            </Link>
            <Link className="font-bold text-black text-xl" href="/blog">
              Blog
            </Link>
            <Link className="font-bold text-black text-xl" href="/about">
              About
            </Link>
          </div>
      </nav>
    );
};

export default Navbar;