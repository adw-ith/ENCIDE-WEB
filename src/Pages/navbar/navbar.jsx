import React, { useState, useEffect } from "react";
import "./navbar.css";

function NavComponent() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section
  let lastScrollTop = 0;
  let scrollTimeout = null;

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    setIsScrolling(true);

    if (currentScroll > lastScrollTop) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const navLinkEls = document.querySelectorAll(".nav_link");
    navLinkEls.forEach((navLinkEl) => {
      navLinkEl.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        navLinkEl.classList.add("active");
      });
    });
    return () => {
      navLinkEls.forEach((navLinkEl) => {
        navLinkEl.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <div
        className={`navbar-container ${
          scrollDirection === "up" || !isScrolling ? "scrolled-up" : "scrolled-down"
        }`}
      >
        <nav className="MobileNav">
          <a
            href="#home"
            className={`mob nav_link ${activeSection === "home" ? "active" : ""}`}
          >
            <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
            <p className="icontext">Home</p>
          </a>
          <a
            href="#about"
            className={`mob nav_link ${activeSection === "about" ? "active" : ""}`}
          >
            <svg className="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
            <p className="icontext">About</p>
          </a>

        </nav>
      </div>

      <div
        className={`navbar-container ${
          scrollDirection === "up" || !isScrolling ? "scrolled-up" : "scrolled-down"
        }`}
      >
        <nav className="navbar px-4 p-4 sm:px-16">
          <div className="logo font-bold text-2xl">
            <a href="#home">
              ENCIDE <span className="text-[#9a00b3] font-extrabold">MACE</span>
            </a>
          </div>
          <ul className="nav_main text-base flex gap-x-12">
            <li className={`cur nav_link ${activeSection === "home" ? "active" : ""}`}>
              <a href="#home">HOME</a>
            </li>
            <li className={`cur nav_link ${activeSection === "about" ? "active" : ""}`}>
              <a href="#about">ABOUT</a>
            </li>
            <li className={`cur nav_link ${activeSection === "team" ? "active" : ""}`}>
              <a href="#team">TEAM</a>
            </li>
            <li className={`cur nav_link ${activeSection === "contact" ? "active" : ""}`}>
              <a href="#contact">CONTACT</a>
            </li>
            <li className="events nav_link">
              <li className="in_bord px-4 p-1">
                <a
                  href="#events"
                  className={`nav_link ${activeSection === "events" ? "active" : ""}`}
                >
                  EVENTS
                </a>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavComponent;
