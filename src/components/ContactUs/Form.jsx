"use client"; // required if using Next.js 13+ app directory

import { useState } from "react";
import "./Form.css";
import Button from "../Button/Button";

export default function Form() {
    // Form state
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        message: "",

    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);


        // You can send the data to an API route
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
    };


    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className=" d-flex flex-column flex-lg-row" style={{ gap: "24px" }}>
                <div className="col-12 col-lg-6">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="mobile-number">Mobile Number</label>
                <input
                    type="number"
                    name="Mobile-Number"
                    placeholder="Enter"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>



            <div className="contact-submit-btn">
                <Button label="Submit" onClick={handleSubmit} />
            </div>


        </form>
    );
}
