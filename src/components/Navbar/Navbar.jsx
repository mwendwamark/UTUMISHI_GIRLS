import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";

import logo from "../../assets/logo.avif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if navbar should have backdrop blur and color change
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down & past threshold - hide navbar
        setVisible(false);
      } else {
        // Scrolling up - show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Academics", path: "/" },
    { name: "About us", path: "/" },
    { name: "Student Life", path: "/" },
    { name: "Admission", path: "/" },
    { name: "News & Gallery", path: "/" },
  ];

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        visible ? "visible" : "hidden"
      }`}
    >
      {/* Top Police Colors Bar */}
      <div className="navbar_top_bar">
        <div className="police_blue"></div>
        <div className="police_light_blue"></div>
        <div className="police_red"></div>
        <div className="police_yellow"></div>
      </div>

      <div className="navbar_container container">
        {/* Logo Left */}
        <div className="navbar_logo">
          <img
            src={logo}
            alt="Utumishi Girls Academy"
            width="100"
            height="100"
          />
        </div>

        {/* Desktop: Links Center */}
        <nav className="navbar_links desktop_only">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="nav_link">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="navbar_icons">
          <a
            href="tel:+254700000000"
            className="icon_link"
            aria-label="Call us"
          >
            <MdLocalPhone />{" "}
          </a>
          <a
            href="mailto:info@utumishigirls.ac.ke"
            className="icon_link"
            aria-label="Email us"
          >
            <MdEmail />
          </a>
          <button
            className="menu_icon mobile_only"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile_menu_overlay ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div
          className={`mobile_menu_content ${menuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close_menu_icon"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <IoClose />
          </button>
          <nav className="mobile_nav_links">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="mobile_nav_link"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
