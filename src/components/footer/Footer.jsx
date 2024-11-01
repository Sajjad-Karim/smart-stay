import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-600">
            About SmartStay
          </h3>
          <p className="text-gray-400">
            SmartStay is a personalized room-sharing platform designed for
            modern travelers. Discover unique stays, connect with hosts, and
            enjoy a seamless booking experience tailored to your preferences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-600">
            Quick Links
          </h3>
          <ul>
            <li className="mb-2">
              <a href="#home" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" className="hover:text-indigo-400 transition">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#support" className="hover:text-indigo-400 transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact and Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-indigo-500">
            Contact Us
          </h3>
          <p className="text-gray-400">Email: support@smartstay.com</p>
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} SmartStay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
