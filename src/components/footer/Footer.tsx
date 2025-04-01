import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" fill="#333" />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fill="#fff"
                fontSize="24"
                fontFamily="Arial"
                fontWeight="bold"
              >
                B
              </text>
            </svg>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-blue-600">
                Warranty
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600">
                Catalogue
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-600">
                Cylinders
              </Link>
            </li>
            <li>
              <Link href="/sales" className="hover:text-blue-600">
                Sales &amp; Services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Head Office</h3>
          <ul className="space-y-2">
            <li>
              Unit 1 874 Mountain Highway
            </li>
            <li>
              Bayswater
            </li>
            <li>
             Victoria 3153
            </li>
            <li>

            </li>
            <li>
              ABN 49 951 177 618
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600">
        © 2025 Hoist Hydraulics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
