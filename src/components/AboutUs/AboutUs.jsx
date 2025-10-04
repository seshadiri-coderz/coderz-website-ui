"use client";
import React from "react";
import "./AboutUs.css";
import { MainBadge } from "../Typo/Typo";

export default function AboutUs({ title, subtitle }) {
    return (
        <section>
            <div className="container">
                <div className="text-center service">
                    <MainBadge text="About Us" />
                  </div>
            </div>
        </section>
    );
}
