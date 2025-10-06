"use client";
import React from "react";
import "./page.css";
import Banner from "@/components/Banner/Banner";
import { MainBadge } from "@/components/Typo/Typo";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import cardsData from "@/components/ServiceCard/ServiceCard.json";
import FAQs from "@/components/FAQs/FAQs";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function Services({ title, subtitle }) {
  return (
    <section className="ServivePage">
      <div>
        <Banner
          title="Services"
          bgColor="#12152E"
          textColor="text-white"
          background="/images/Banner-back.svg"
        />
      </div>
      <div className="container">
        <div className="Service-cart">
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

          <div>
             <FAQs
              title="FAQs"
       />
            
          </div>
          <div>
            <ContactUs
            title="Contact Us"
      description="We’d love to hear from you! Whether it’s a question, feedback, collaboration, or the spark of a new project, your ideas inspire us to create the next big innovation and deliver meaningful solutions together."
      backimg="/images/ContactUs-back.svg"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
