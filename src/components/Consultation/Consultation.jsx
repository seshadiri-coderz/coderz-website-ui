"use client";
import React from "react";
import "./Consultation.css";
import Button from "../Button/Button";
export default function Consultation({ title, subtitle, image }) {
      const handleClick = () => {
    alert("Request CallBack button clicked!");
  };
    return (
        <section className="Consultation">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 Const-content">
                        <h1 className="col-12 col-lg-12">{title}</h1>
                        <p className="col-12 col-lg-12">{subtitle}</p>
                        <Button label="Get In Touch" onClick={handleClick} />
                    </div>
                    <div className="col-12 col-lg-4 Const-img">
                        <img className="img-fluid" src={image} alt=""/>
                    </div>

                </div>

            </div>
        </section>

    );
}
