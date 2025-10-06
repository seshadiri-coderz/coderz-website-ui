"use client";
import Link from "next/link";
import "./Banner.css";
import Button from "../Button/Button";

export default function Banner({
  title, 
  subtitle,
  background,
  size,
  bannerimg,
  isbtn,
}) {
  const handleClick = () => {
    alert("Request CallBack button clicked!");
  };

  return (
    <section
      className="banner"
      style={{
        background: `url(${background}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="banner-content">
          <div className="banner-title row justify-content-center">
            <h1 className={`col-12 ${size}`}>{title}</h1>
            {subtitle && (
              <p className="col-12 col-lg-6 text-center">{subtitle}</p>
            )}
          </div>
          {isbtn && (
            <div className="d-flex justify-content-center">
              <Button label="Find Out How" onClick={handleClick} />
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center py-4">
          {bannerimg &&(


          <img className="img-fluid" src={bannerimg} alt="banner" />
          )}
        </div>
      </div>
    </section>
  );
}
