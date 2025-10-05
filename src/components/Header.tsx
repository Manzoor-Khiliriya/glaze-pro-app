'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Architectural Glass", href: "/services/architectural-glass" },
        { name: "Decorative Glass", href: "/services/decorative-glass" },
        { name: "Mirrors", href: "/services/mirrors" },
        { name: "Safety & Performance Glass", href: "/services/safety-performance-glass" },
      ],
    },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50"> <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */} 
      <Link href="/" scroll={false} className="flex items-center space-x-3"> 
      <Image src={logo} alt="Logo" height={80} /> 
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-sky-500 font-semibold transition">
                {link.name}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:visible group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50`}
              >
                {link.dropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    className="block px-4 py-2 text-gray-700 hover:bg-sky-500 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              scroll={false}
              className="text-gray-700 hover:text-sky-500 font-semibold transition"
            >
              {link.name}
            </Link>
          )
        )}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
        <nav className="px-6 py-4 flex flex-col space-y-3">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="flex flex-col">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-700 hover:text-blue-800 font-semibold transition text-left flex justify-between items-center"
                >
                  {link.name}
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen &&
                  link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      scroll={false}
                      className="pl-4 py-2 text-gray-700 hover:text-blue-800 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                scroll={false}
                className="text-gray-700 hover:text-blue-800 font-semibold transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>

  );
}
