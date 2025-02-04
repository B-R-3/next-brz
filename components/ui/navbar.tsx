"use client";

import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rose-900/75 backdrop-blur(1px) shadow-md w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-6xl text-white">
            Cazafamilia
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {["Accueil", "Menu", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className="text-4xl text-white hover:text-gray-200 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Bouton Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Ouvrir le menu"
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Bouton fermer */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
            className="self-end text-gray-600 hover:text-black focus:outline-none"
          >
            <AiOutlineClose size={28} />
          </button>

          {/* Liens du menu */}
          <nav className="flex flex-col space-y-6 mt-6">
            {["Accueil", "Menu", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={item === "Accueil" ? "/" : `/${item.toLowerCase()}`}
                className="text-4xl text-gray-700 hover:text-red-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
