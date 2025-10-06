"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testimonials.css";
import { MainBadge } from "../Typo/Typo";
import useResponsive from "@/hooks/responsive";

const Testimonials = ({ badge, title }) => {
  const { isMobile } = useResponsive();

  
  return (
    <div className="testimonials-section text-white">
      <div className="container">
        {/* ===== Top Header Row ===== */}
        <div className="mb-4 main-row">
          <div className="col-md-7">
            <MainBadge text={badge} />
            <h2 className="title mt-3 mb-0">{title}</h2>
          </div>

          {/* Arrows aligned to right */}
          <div className="d-flex gap-3 mt-2">
            <button
              className="custom-arrow"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="custom-arrow"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>


        

        {/* ===== Carousel ===== */}
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>1.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      friendly, trustworthy for transactions and really updated.
                      Being a NGO our need was to have a website which was user
                      After a long search we could end with Coderz who have
                      different league through social media platforms.
                      redefined the way PULSE was perceived and taken it to a
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>2.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      After a long search we could end with Coderz who have
                      friendly, trustworthy for transactions and really updated.
                      different league through social media platforms.
                      redefined the way PULSE was perceived and taken it to a
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>3.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      friendly, trustworthy for transactions and really updated.
                      After a long search we could end with Coderz who have
                      redefined the way PULSE was perceived and taken it to a
                      different league through social media platforms.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>4.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      friendly, trustworthy for transactions and really updated.
                      After a long search we could end with Coderz who have
                      redefined the way PULSE was perceived and taken it to a
                      different league through social media platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-6">
                 <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>5.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      friendly, trustworthy for transactions and really updated.
                      After a long search we could end with Coderz who have
                      redefined the way PULSE was perceived and taken it to a
                      different league through social media platforms.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>6.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      friendly, trustworthy for transactions and really updated.
                      After a long search we could end with Coderz who have
                      redefined the way PULSE was perceived and taken it to a
                      different league through social media platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>7.Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      friendly, trustworthy for transactions and really updated.
                      After a long search we could end with Coderz who have
                      redefined the way PULSE was perceived and taken it to a
                      different league through social media platforms.
                    </p>
                  </div>
                </div>

                {/* duplicate first card to keep loop smooth */}
                <div className="col-md-6">
                  <div className="card testimonial-card">
                    <div className="name-section">
                      <h5>Dr. Vinod Kumar</h5>
                      <p className="sub-name mb-2">Pulse</p>
                    </div>
                    <div className="pt-4">
                      <img src="/Assets/quote.png" alt="" />
                    </div>
                    <p className="pt-3">
                      Being a NGO our need was to have a website which was user
                      friendly, trustworthy for transactions and really updated.
                      After a long search we could end with Coderz who have
                      redefined the way PULSE was perceived and taken it to a
                      different league through social media platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Indicators ===== */}
          <div className="carousel-indicators mt-4">
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="3"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
