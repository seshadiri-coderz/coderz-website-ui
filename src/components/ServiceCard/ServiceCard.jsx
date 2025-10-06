"use client";
import React from "react";
import "./ServiceCard.css";

export default function ServiceCard({ title, arrowimage, description, image }) {
    return (
        <div className="card">
                <div className="card-content">
                    <div className="head d-flex align-items-center justify-content-between">
                        <div>
                            <h1 className="card-title">{title}</h1>
                        </div>
                        <div className="arrowimage">
                            <button>
                            {arrowimage && <img src={arrowimage} alt={title}  />}
                            </button>
                        </div>
                        
                    </div>

                    <p className="card-description ">{description}</p>
                </div>
                <div className="card-image">
                    
                    {image && <img src={image} alt={title} width={297.57} height={248.59} />}
                </div>
                
        </div>
    );
}
