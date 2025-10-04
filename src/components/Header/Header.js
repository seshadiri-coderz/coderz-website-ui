"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Header.css";
import Button from "../Button/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    alert("Button clicked!");
  };

  // Sticky effect
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
<div className={`Header ${scrolled ? "scrolled" : ""}`}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <img src="/images/Coderz-logo.svg" alt="CoderzVisionTech" />
        </Link>

    
        <div className="d-none d-lg-flex navbar-nav gap-3">
          <Link href="/" className="nav-link fs-6 fw-normal text-white">Home</Link>
          <Link href="/about-coderz" className="nav-link fs-6 fw-normal text-white">About</Link>
          <Link href="/services" className="nav-link fs-6 fw-normal text-white">Services</Link>
          <Link href="/salesforce" className="nav-link fs-6 fw-normal text-white">Salesforce</Link>
          <Link href="/portfolio" className="nav-link fs-6 fw-normal text-white">Portfolio</Link>
          <Link href="/contact-us" className="nav-link fs-6 fw-normal text-white">Contact Us</Link>
        </div>

        
        <div className="d-none d-lg-block">
          <Button label="Request CallBack" onClick={handleClick} />
        </div>
</div>
      </nav>
      <nav className="M-menu bg-transparent">
        <div className={`M-nav d-flex justify-content-between p-3 ${isOpen ? "open" : ""}`}>
        <Link href="/" className="m-logo d-lg-none">
          <img src="/images/Coderz-logo.svg" alt="CoderzVisionTech" width={92} height={25.67} />
        </Link>
      
        <img
          className="d-lg-none btn p-0"
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? "/images/Close.svg" : "/images/Ham-burger Menu.svg"}
          alt="menu"
          style={{ width: "24px", height: "24px", cursor: "pointer" }}
        />
      </div>
    
      {isOpen && (
        <div className="mobile-slide bg-dark text-white d-lg-none">
          <div className="M-menu d-flex flex-column gap-3">
            <Link href="/" className="nav-link text-white" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about-coderz" role="button"className="nav-link text-white" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="nav-link text-white" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/salesforce" className="nav-link text-white" onClick={() => setIsOpen(false)}>Salesforce</Link>
            <Link href="/portfolio" className="nav-link text-white" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/contact-us" className="nav-link text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>

            {/* <div className="mt-2">
              <Button label="Request CallBack" onClick={handleClick} />
            </div> */}
          </div>
        </div>
      )}
    </nav>
</div>
    </>
  );
}
