"use client";
import React from "react";
import "./Partner.css";

export default function Partner({ title, images = [] }) {
    return (
        <section>
            <div className="container">
                <div className="partner">
                    <div className="partner-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="partner-imgs">
                        {images.map((img, index) => (
                            <img className="img-fluid" key={index} src={img} alt={`Partner ${index + 1}`} width={185} height={72} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
