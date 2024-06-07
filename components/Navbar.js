import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = ({ logo }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 10); // Adjust threshold for stickiness as needed
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isClient]);

  if (!isClient) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-2 flex justify-between items-center z-30 transition-all duration-300 ${isSticky ? "bg-black bg-opacity-50 shadow-lg" : "bg-black"
        }`}
      style={{
        backdropFilter: isSticky ? "blur(10px)" : "none", // Apply blur effect when sticky
        borderBottom: isSticky ? "1px solid rgba(255, 255, 255, 0.2)" : "none", // Subtle border for glass effect
      }}
    >
      <Link href="/">
        <p>
          <img src={logo} alt="Your Logo" className="h-20 w-auto p-2" /> {/* Adjusted logo size and padding */}
        </p>
      </Link>
      <ul className="hidden md:flex space-x-12 list-none">
        <li>
          <ScrollLink
            to="home"
            smooth={true}
            duration={800} // Increased duration for smoother scrolling
            offset={-70} // Adjust offset to consider navbar height
          >
            <p className="text-white hover:text-orange-500 font-medium cursor-pointer">Home</p>
          </ScrollLink>

        </li>
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={800} // Increased duration for smoother scrolling
            offset={-70} // Adjust offset to consider navbar height
          >
            <p className="text-white hover:text-orange-500 font-medium cursor-pointer">
              About
            </p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="tokenomics"
            smooth={true}
            duration={800}
            offset={-70}
          >
            <p className="text-white hover:text-orange-500 font-medium cursor-pointer">
              Tokenomics
            </p>
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="roadmap"
            smooth={true}
            duration={800}
            offset={-70}
          >
            <p className="text-white hover:text-orange-500 font-medium cursor-pointer">
              Roadmap
            </p>
          </ScrollLink>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/11BuM2dQpIwzjztYjF7d5CpLWqTgmhU64/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-white hover:text-orange-500 font-medium cursor-pointer">
              Whitepaper
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
