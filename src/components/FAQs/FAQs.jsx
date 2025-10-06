"use client";
import React, { useState } from "react";
import FAQsData from "../FAQs/FAQsAccordian/FAQsAccordian.json";
import "./FAQs.css";
import { MainBadge } from "../Typo/Typo";

export default function FAQs({ title, backimg }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section"
        style={{
      background: `url(${backimg}) no-repeat left center`}}
        >
            <MainBadge text="Here are the Answers" />
            <h1 className="faq-title">{title}</h1>
            <div className="faq-container">
                {FAQsData.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-QA" onClick={() => toggleAccordion(index)}>
                            <div className="faq-question">
                                <h1>{item.question}</h1>
                                <img
                                    src={activeIndex === index ? item.downiconoclose : item.downiconopen}
                                    alt="DownArrow"
                                    className="Down-arrow"
                                />
                                </div>
                                <div className={`faq-answer-wrapper ${activeIndex === index ? "open" : "" }`}>
                                    <div className="faq-answer">
                                        <p className="col-12 col-lg-10">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                    </div>
        </section>
    );
}
