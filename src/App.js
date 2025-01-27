import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/backg.jpg')",
      }}
    >
      {/* Top Navigation */}
      <header className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold">Chaitanya Kumar Bandi</h1>
        <nav className="mt-2">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Center Content */}
      <main className="flex flex-col justify-center items-center flex-1">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
        <motion.div
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         transition={{ duration: 0.6 }}
        >
  </motion.div>  
          <img
            src="/profilee_picture.jpg"
            alt="Chaitanya Kumar Bandi Experienced AI Engineer"
            className="w-full h-screen object-cover"
          />
        </motion.div>

        {/* Name */}
        <h2 className="mt-4 text-4xl font-extrabold">Chaitanya Kumar Bandi</h2>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6">
          <a
            href="https://linkedin.com/in/chaitanya-bandi-31663a245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/cbandi18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/chaithu_openheart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-red-400"
          >
            <FaFilePdf />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4">
        <p className="text-sm text-gray-300">&copy; 2025 Chaitanya Kumar Bandi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;