"use client";
import Link from "next/link";
import "./Banner.css";
import Button from "../Button/Button";

export default function Banner({ title, subtitle, background,bannerimg }) {

  const handleClick = () => {
    alert("Request CallBack button clicked!");
  };

  return (
    <section className="banner" style={{
      background: `url(${background}) no-repeat right center`
    }}>
      <div className="container">
        <div className="banner-content">
          <div className="banner-title row justify-content-center">
            <h1 className="col-12 col-lg-10">{title}</h1>
            {subtitle && <p className="col-12 col-lg-6 text-center">{subtitle}</p>}
          </div>
          <div className="d-flex justify-content-center">
            <Button label="Find Out How" onClick={handleClick} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src={bannerimg} alt="banner" />
        </div>
      </div>
    </section>
  );
}
