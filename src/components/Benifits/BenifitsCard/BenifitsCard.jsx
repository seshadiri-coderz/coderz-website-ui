"use client";
import React from "react";
import "./BenifitsCard.css";

export default function BenifitsCard({ numicon, title}) {
    return (
        <div className="Benifitscard">
                <div className="Benifits-card-image">
                    {numicon && <img src={numicon} alt={title}  />}
                    <p>{title}</p>
                </div>               
        </div>
    );
}
