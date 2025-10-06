"use client";
import React from "react";
import "./AboutUs.css";
import { MainBadge } from "../Typo/Typo";
import Button from "../Button/Button";

export default function AboutUs({ title, description, features, image, mimage }) {

    const handleClick = () => {
        alert("Request CallBack button clicked!");
    };

    return (
        <section className="AboutUs">
            <div className="text-center pb-4">
            <MainBadge text="About Us" />
            </div>

            <div className="container">
                <div className="About-card d-flex flex-column  flex-md-row">
                    {/* Mobile view img */}
                    <div className="M-About-img">
                        <img
                            src={mimage}
                            alt="M-About-img"
                            className="img-fluid"
                        />
                    </div>
                    {/* Left Column */}
                    <div className="About-item left-col col-12 col-lg-6">
                        <div className="A-head">
                            <h1 className="About-title">{title}</h1>
                            <p className="About-desc">{description}</p>
                        </div>

                        <div className="features d-flex flex-column flex-md-row gap-4 mb-4">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item d-flex flex-column align-items-start">
                                    <div className="f-icon">
                                        <img src={feature.icon} alt="icon" width={40} height={40} />
                                    </div>
                                    <h1 className="feature-title">{feature.title}</h1>
                                    <p className="feature-desc">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="A-btn Button">
                            <Button label="Request CallBack" onClick={handleClick} />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="About-img right-col col-12 col-lg-6 ">
                        <img
                            src={image}
                            alt="About-img"
                            width={520}
                            height={507}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
