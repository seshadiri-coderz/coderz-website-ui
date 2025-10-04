"use client";
import React from "react";
import "./Ourservices.css";
import { MainBadge } from "../Typo/Typo";
import ServiceCard from "../ServiceCard/ServiceCard";
import cardsData from "../ServiceCard/ServiceCard.json";


export default function Services({ title, subtitle }) {
    return (
        <section>
            <div className="container">
                <div className="text-center service">
                    <MainBadge text="Our Services" />
                    <h1 className="">{title}</h1>
                    {subtitle && <p className="col-12 col-lg-7 text-center">{subtitle}</p>}
                </div>
                <div className="row">
                    {cardsData.map((card, index) => (
                        <div key={index} className="service-card col-12 col-lg-4">
                            <ServiceCard
                                title={card.title}
                                arrowimage={card.arrowimage}
                                description={card.description}
                                image={card.image}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
}
