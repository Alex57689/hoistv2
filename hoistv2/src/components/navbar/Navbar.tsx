import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary p-4 shadow-md">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Notice no <a> around 'Hoist Hydraulics' */}
        <Link href="/" className="text-white text-2xl font-bold">
          Hoist Hydraulics
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="/sales" className="text-white hover:text-gray-300">
            Sales & Service
          </Link>
          <Link href="/ourrange" className="text-white hover:text-gray-300">
            Our Range
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
