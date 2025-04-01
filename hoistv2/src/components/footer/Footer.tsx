import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
    <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="space-y-2">
        <a href="#" className="hover:text-blue-600">
          Warranty
        </a>
        <a href="#" className="hover:text-blue-600">
          Catalogue
        </a>
        <a href="#" className="hover:text-blue-600">
          Products
        </a>
        <a href="#" className="hover:text-blue-600">
          Cylinders
        </a>
        <a href="#" className="hover:text-blue-600">
          Sales & Services
        </a>
      </div>
      <div className="space-y-2">
        <span className="font-bold">Links & Resources</span>
        <a href="#" className="hover:text-blue-600">
          Company
        </a>
        <a href="#" className="hover:text-blue-600">
          Resources
        </a>
      </div>
      <div className="space-y-2">
        <a href="#" className="hover:text-blue-600">
          Australian Trucking Association
        </a>
        <a href="#" className="hover:text-blue-600">
          Australasian Transport News
        </a>
      </div>
      <div className="space-y-2">
        <a href="#" className="hover:text-blue-600">
          Department of Land Transport
        </a>
        <a href="#" className="hover:text-blue-600">
          Department of Transport and Regional Services
        </a>
        <a href="#" className="hover:text-blue-600">
          NSW Department of Transport
        </a>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-600">
      © 2025 Hoist Hydraulics. All rights reserved.
    </div>
  </footer>
  );
};

export default Footer;
