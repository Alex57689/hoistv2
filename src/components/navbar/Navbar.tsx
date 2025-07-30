'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        <Image src='/images/hoist-logo.svg' width={50} height={50} alt='logo hoist hydraulics'/>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/company-profile" className="text-white hover:text-gray-300">
            Company
          </Link>
          <Link href="/sales-service" className="text-white hover:text-gray-300">
            Sales & Service
          </Link>
          {/*<Link href="/ourrange" className="text-white hover:text-gray-300">
            Our Range
          </Link>*/}
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <Link href="/" className="block text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/company-profile" className="block text-white hover:text-gray-300">
            Company
          </Link>
          <Link href="/sales-service" className="block text-white hover:text-gray-300">
            Sales & Service
          </Link>
          <Link href="/ourrange" className="block text-white hover:text-gray-300">
            Our Range
          </Link>
          <Link href="/contact" className="block text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
