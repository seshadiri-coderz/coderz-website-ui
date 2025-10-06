"use client";
import "./Awards-Recognitions.css";
import Button from "../Button/Button";

export default function AwardRecognition({ imageSrc, variant = 1 , title, description, description2,description3,btntext}) {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container p-4">
      <div
        className="row align-items-center p-4 rounded-4"
        style={{ backgroundColor: "#ffffff0f" }}
      >
        {/* Left Content */}
        <div
          className={`col-12 col-md-6 d-flex flex-column gap-4 ${
            variant === 2 ? "order-md-2" : "order-md-1"
          }`}
        >
          <Button label={btntext} onClick={handleClick} />

          <h2 className="title">
            {title}
          </h2>

          <p className="description">
            {description}
          </p>
          <p className="description">
            {description2}
          </p>
          <p className="description">{description3}</p>
        </div>

        {/* Right Image */}
        <div
          className={`col-12 col-md-6 p-0 d-flex ${
            variant === 2 ? "order-md-1 justify-content-start" : "order-md-2 justify-content-end"
          }`}
        >
          <img
            src={imageSrc || "/Assets/A1.png"}
            alt="Award Recognition"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
