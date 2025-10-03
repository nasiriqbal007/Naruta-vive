import React, { useState } from "react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white flex items-center heading justify-between rounded-t-4xl py-4 md:py-6 h-padding relative">
      <div id="home" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-[34px] h-[34px]" />
        <h2>NaturaVive</h2>
      </div>

      {/* Desktop links */}
      <ul className="hidden lg:flex gap-4">
        <li>
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="nav-link">
            Our Services
          </a>
        </li>
        <li>
          <a href="#products" className="nav-link">
            Shop
          </a>
        </li>

        <li>
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          <a href="#testimonials" className="nav-link">
            Testimonials
          </a>
        </li>
      </ul>

      <div className="hidden md:flex gap-4">
        <Search className="nav-link" />
        <User className="nav-link" />
        <Heart className="nav-link" />
        <ShoppingCart className="nav-link" />
      </div>

      {/* Mobile toggle */}
      <button
        className="lg:hidden ml-4 text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="gap-2 top-full right-4 sm:right-8 bg-white/40 backdrop-blur-md absolute p-4 shadow-lg rounded-lg z-50 md:hidden">
          <li>
            <a href="#hero" className="nav-link" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Our Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </a>
          </li>
          <li className="flex gap-4 mt-4">
            <Search className="nav-link" />
            <User className="nav-link" />
            <Heart className="nav-link" />
            <ShoppingCart className="nav-link" />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
