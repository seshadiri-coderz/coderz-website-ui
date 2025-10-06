"use client";
import React from "react";
import "./TrustedBy.css";
import { MainBadge } from "../Typo/Typo";
import trusted from "../TrustedBy/TrustedBy.json"; 

export default function TrustedBy({ title }) {
  // ✅ Split array into two halves for opposite direction slides
  const half = Math.ceil(trusted.length / 2);
  const firstHalf = trusted.slice(0, half);
  const secondHalf = trusted.slice(half);

  return (
    <section className="Trusted-section">
      <div className="container">
        <div className="text-center Trusted">
          <MainBadge text="Trusted By" />
          <h1>{title}</h1>

          {/* Row 1 - left to right */}
        <div className="Trusted-Slide">
          <div className="Trusted-row slide-left d-flex">
            {[...firstHalf, ...firstHalf].map((brand, i) => (
              <div className="Trusted-logo" key={i}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>

          {/* Row 2 - right to left */}
          <div className="Trusted-row slide-right d-flex">
            {[...secondHalf, ...secondHalf].map((brand, i) => (
              <div className="Trusted-logo" key={i + half}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
