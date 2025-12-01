import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🧠 Close menu when window resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 📌 Close menu when clicking any link
  const handleLinkClick = () => setMenuOpen(false);

  // 📜 Menu items list
  const navLinks = [
    { label: "صفحہ اول", to: "/categoryNews/home" },
    { label: "تازہ ترین", to: "/categoryNews/latest" },
    { label: "کھیل", to: "/categoryNews/sports" },
    { label: "تعلیم", to: "/categoryNews/education" },
    { label: "کاروبار", to: "/categoryNews/business" },
    { label: "صحت", to: "/categoryNews/health" },
    { label: "ادب و فنون", to: "/categoryNews/litrature" },
    { label: "سائنس اینڈ ٹیکنالوجی", to: "/categoryNews/science & technology" },
    { label: "ثقافت", to: "/categoryNews/culture" },
    { label: "کالم", to: "/categoryNews/column" },
  ].reverse();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      {/* 🔹 Top Navbar */}
      <nav className="bg-[rgb(18,16,69)] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center py-3">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold whitespace-nowrap tracking-wide leading-tight">
                نظربان بلوچستان
              </h1>
            </Link>
          </div>
        </div>
      </nav>

      {/* 🔹 Bottom Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* 🖥️ Desktop Links */}
            <ul className="hidden lg:flex flex-row-reverse items-center gap-6 text-[clamp(16px,1.6vw,20px)]">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* 📱 Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-gray-300 hover:bg-gray-50"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* 📱 Mobile Menu */}
          <div
            className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-xl border border-gray-200 mt-2 bg-white shadow-md">
              <div className="flex flex-col items-end p-2 gap-1 text-[17px] max-h-[400px] overflow-y-auto">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    onClick={handleLinkClick}
                    className="w-full px-3 py-2 rounded hover:bg-gray-100 text-right transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
