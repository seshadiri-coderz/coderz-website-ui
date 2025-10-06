"use client";
import React from "react";
import "./Benifits.css";
import { MainBadge } from "../Typo/Typo";
import BenifitsCard from "../Benifits/BenifitsCard/BenifitsCard.jsx";
import cardsData from "../Benifits/BenifitsCard/BenifitsCard.json";

export default function Benifits({ title, subtitle, image }) {
    return (
        <section>
            <div className="container">
                <div className="Benifits">
                    <div className="Benefits-head">
                        <MainBadge text="Benefits of Working With Coderz" />
                        <div className="Benifits-content text-center">
                            <h1 className="">{title}</h1>
                            {subtitle && <p className=" text-center">{subtitle}</p>}
                        </div>
                    </div>
                    <div className="row Benifit-card-part">
                        <div className="col Benifits-img">
                            <img src={image} alt="Benifit-img" width={511} height={474}/>
                        </div>

                        <div className="col Benifits-card ">
                            {cardsData.map((Benifitscard, index) => (
                                <div key={index} className="Benifits-card">
                                    <BenifitsCard
                                        numicon={Benifitscard.numicon}
                                        title={Benifitscard.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
