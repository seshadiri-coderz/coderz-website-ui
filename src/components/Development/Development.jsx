"use client";
import React from "react";
import "./Development.css";
 
export default function Development({ title, images }) {
    return (
        <section>
            <div className="container">
                <div className="development">
                    <div className="development-title mt-3">
                        <h1>{title}</h1>
                    </div>
                    <div className="tt">
                        <div className="development-imgs ">
                            <div className="row justify-content-center gy-4">
                                {images.map((images, indexs) => (
                                    <div className="col-6 col-md-3">
                                        <div className="mt-4">
                                            <img className="img-fluid " key={indexs} src={images} alt={`Service ${indexs + 1}`} height={72} width={300}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
 
                        </div>
                    </div>
 
                </div>
            </div>
        </section>
    );
}