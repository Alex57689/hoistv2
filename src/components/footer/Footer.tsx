import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link href="warranty" className="hover:text-primary-active">
                Warranty
              </Link>
            </li>
            {/*
            <li>
              <Link href="catalogue" className="hover:text-primary-active">
                Catalogue
              </Link>
            </li>
            <li>
              <Link href="ourrange" className="hover:text-primary-active">
                Products
              </Link>
            </li>
            <li>
              <Link href="cylinders" className="hover:text-primary-active">
                Cylinders
              </Link>
            </li>
            */}
            <li>
              <Link href="/sales-service" className="hover:text-primary-active">
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

      <div className="mt-8 text-center text-sm text-gray-600">
        © 2025 Hoist Hydraulics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
