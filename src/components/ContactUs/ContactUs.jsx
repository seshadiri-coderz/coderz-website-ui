"use client";
import React from "react";
import "./ContactUs.css";
import Button from "../Button/Button";
import Form from "./Form";
export default function ContactUs({ title, description, backimg }) {

    return (
        <section className="ContactUs">
            <div className="container">
                <div className="contactbg">
                    <div className="row contactus-row">
                        <div className="col contactus-col"
                        style={{
      background: `url(${backimg}) no-repeat top center`
    }}>
                            <div className="contactus-content">
                                <h1>{title}</h1>
                                <p className="">{description}</p>
                            </div>
                        
                        </div>
                        <div className="col form-col">
<Form />
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
}
