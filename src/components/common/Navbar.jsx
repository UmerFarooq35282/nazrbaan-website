import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);

  // 🧠 Step 1: Close menu when window resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setAccordionOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 📌 Step 2: Function to handle link click
  const handleLinkClick = () => {
    setMenuOpen(false);
    setAccordionOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      {/* 🔹 Top Navbar */}
      <nav className="bg-[rgb(18,16,69)] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center py-3">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <h1 className="text-xl md:text-2xl font-bold whitespace-nowrap">
                نظربان بلوچستان
              </h1>
            </a>
          </div>
        </div>
      </nav>

      {/* 🔹 Bottom Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            {/* 🖥️ Desktop Links */}
            <ul className="hidden lg:flex flex-row-reverse items-center gap-6 text-[clamp(16px,1.6vw,20px)]">
              {[
                { label: "صفِ اوّل", href: "#" },
                { label: "کھیل", href: "#game" },
                { label: "شوبز", href: "#showbiz" },
                { label: "اسلام", href: "#islam" },
                { label: "صحت", href: "#health" },
                { label: "ادب", href: "#litrature" },
                { label: "خواتین", href: "#women" },
                { label: "کالم", href: "#column" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a className="hover:underline" href={link.href}>
                    {link.label}
                  </a>
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
              menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="rounded-xl border border-gray-200 mt-2 bg-white shadow-md">
              <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="w-full flex items-center justify-between px-4 py-3"
              >
                <span className="font-semibold">مینیو</span>
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    accordionOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.18l3.71-3.95a.75.75 0 111.08 1.04l-4.24 4.51a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  accordionOpen ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div className="flex flex-col items-end p-2 gap-1 text-[17px]">
                  {[
                    { label: "صفِ اوّل", href: "#" },
                    { label: "کھیل", href: "#game" },
                    { label: "شوبز", href: "#showbiz" },
                    { label: "اسلام", href: "#islam" },
                    { label: "صحت", href: "#health" },
                    { label: "ادب", href: "#litrature" },
                    { label: "خواتین", href: "#women" },
                    { label: "کالم", href: "#column" },
                  ].map((link, idx) => (
                    <a
                      key={idx}
                      onClick={handleLinkClick}
                      href={link.href}
                      className="w-full px-3 py-2 rounded hover:bg-gray-50 text-right transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
