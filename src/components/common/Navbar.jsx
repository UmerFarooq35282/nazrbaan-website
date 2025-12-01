import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/categoryNews/home", label: "صفحہ اول" },
    { to: "/categoryNews/latest", label: "تازہ ترین" },
    { to: "/categoryNews/sports", label: "کھیل" },
    { to: "/categoryNews/education", label: "تعلیم" },
    { to: "/categoryNews/business", label: "کاروبار" },
    { to: "/categoryNews/health", label: "صحت" },
    { to: "/categoryNews/litrature", label: "ادب و فنون" },
    { to: "/categoryNews/science & technology", label: "سائنس اینڈ ٹیکنالوجی" },
    { to: "/categoryNews/culture", label: "ثقافت" },
    { to: "/categoryNews/column", label: "کالم" }
  ];

  return (
    <header className="mainNavbar">
      {/* Top Navbar */}
      <nav className="topNavbar">
        <a href="#" className="navlink">
          <img src="/images/logo.png" alt="" className="logo" />
          <h1>نظربان بلوچستان</h1>
        </a>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bottomNavbar">
        <ul>
          {/* MENU ICON FOR MOBILE */}
          <div
            className="menuIcon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu />
          </div>

          {/* DESKTOP LINKS */}
          {links.map((item) => (
            <Link key={item.to} to={item.to} className="navlink">
              {item.label}
            </Link>
          ))}
        </ul>

        {/* MOBILE ACCORDION MENU */}
        {mobileMenuOpen && (
          <div className="mobileMenuWrapper">
            <Accordion defaultExpanded>

              <AccordionDetails>
                <div className="mobileMenuItems">
                  {links.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="mobileMenuLink"
                      onClick={() => setMobileMenuOpen(false)} // Close on click
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
