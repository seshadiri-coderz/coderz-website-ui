"use client";
import Link from "next/link";
import "./Footer.css";
import { color } from "framer-motion";
import Typography from "../Typo/Typo"
import Button from "../Button/Button";
import { Badge } from "../Typo/Typo";


export default function Footer() {
  const handleClick = () => { alert("Button clicked!"); };

  return (
    <footer className="text-white mt-4" style={{ backgroundColor: "#141414" }}>
      <div className="container">
        {/* get-in-touch: stack on mobile, row on md+ */}
        <div className="get-in-touch d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <div className="py-4 d-flex flex-column gap-3">
            <Typography variant="h1" className="fs-2 fw-bold lh-base">Say hey to start our journey</Typography>
            <Typography variant="p" className="fs-6 fw-normal text-white lh-base" style={{ maxWidth: "300px" }}>
              Hey, we will get back to you in less than 12 hours
            </Typography>
            <div>
              <Button label="Get In Touch" onClick={handleClick} />
            </div>
          </div>


          <div className="mt-3 mt-md-0">
            <Link href="/" className="footer-brand">
              <img
                src="/images/Footer-logo.svg"
                alt="Coderz"
                width={88}
                height={109}
                className="img-fluid"
                style={{ maxWidth: 88, height: "auto" }}
              />
            </Link>
          </div>
        </div>

        <hr className="" style={{ borderTop: "2px solid #9ED1BA", margin: "1rem 0" }} />

        <div className="footer-nav row  text-md-start py-4">
          {/* left column: full width on mobile, 5 cols on md+ */}
          <div className="col-12 col-md-5">
            <div className="row">
              <div className="col-6 col-md-6 mb-3">
                <ul className="list-unstyled d-flex flex-column gap-3">
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Software Development</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Mobile App Development</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">UI / UX Design</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Web Development</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Digital Marketing</Link></li>
                </ul>
              </div>

              <div className="col-6 col-md-6 privacy">
                <ul className="list-unstyled d-flex flex-column justify-content-start gap-3">
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Privacy Policy</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Terms & Conditions</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Refund & Cancellation Policies</Link></li>
                  <li><Link href="" className="info fs-6 fw-normal text-white lh-base">Shipping & Delivery</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="row">
              <div className="col-6 col-md-4 mb-2">
                <div className="d-flex justify-content-center mb-3 address">
                  <p>
                    <Badge text="India" color="green" />
                  </p>
                </div>
                <div className="d-flex gap-1 address ">
                  <img className="" src="/images/Location-icon.svg" alt="location" width={18} height={22.21} />
                  <Typography variant="p" className="fs-6 fw-normal text-white lh-base mb-0">AP 2261, H Block 10th Street, Kathiravan Colony, Anna Nagar West, Chennai - 600040</Typography>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <div className="d-flex justify-content-center mb-3 address">
                  <p>
                    <Badge text="India" color="green" />
                  </p>
                </div>
                <div className="d-flex gap-1address ">
                  <img className="" src="/images/Location-icon.svg" alt="location" width={18} height={22.21} />
                  <Typography variant="p" className="fs-6 fw-normal text-white lh-base mb-0">Plot No 3978, 6th Avenue, S Block, Anna Nagar, Chennai - 600040, India</Typography>
                </div>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <div className="d-flex justify-content-center mb-3 address">
                  <p>
                    <Badge text="United Kingdom" color="green" />
                  </p>
                </div>
                <div className="d-flex gap-1 address ">
                  <img className="" src="/images/Location-icon.svg" alt="location" width={18} height={22.21} />
                  <Typography variant="p" className="fs-6 fw-normal text-white lh-base mb-0">Titan Business Centre, Park House, Bradford Road, Birstall, West Yorkshire, WF17 9PH</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-info row">
            <div className="d-flex gap-1 col-12 col-md-6">
              <Typography variant="p" className="d-flex align-items-center gap-1"><img src="/images/Email-icon.svg" alt="Email" /> support@coderzvisiontech.com</Typography>
              /
              <Typography variant="p" className="d-flex align-items-center gap-1"><img src="/images/Dial-icon.svg" alt="Dial" /> +91 9884779995</Typography>
            </div>
            <div className="social-icon d-flex justify-content-end gap-3 col-12 col-md-6 ">
              <Link href="/" ><img src="/images/linkedin.svg" alt="linkedin" width={24} height={24} /></Link>
              <Link href="/" ><img src="/images/instagram.svg" alt="instagram" width={24} height={24} /></Link>
              <Link href="/" ><img src="/images/twiter.svg" alt="twiter" width={24} height={24} /></Link>
              <Link href="/" ><img src="/images/facebook.svg" alt="facebook" width={24} height={24} /></Link>
            </div>
          </div>

          <hr className="" style={{ borderTop: "2px solid #9ED1BA", margin: "1rem 0" }} />

          <div className="copyright">
            <div className="d-flex flex-column  gap-1 col-12 col-md-6">
              <Typography variant="p" className="fs-6 fw-normal text-white lh-base"> Copyright © {new Date().getFullYear()} by Coderz Vision Technology.</Typography>
              <Typography variant="p" className="fs-6 fw-normal text-white lh-base"> All Rights Reserved.</Typography>
            </div>
            <div className="part-img d-flex justify-content-end align-items-center col-12 col-md-6">
              <img src="/images/Part-img.svg" alt="footer-part" width={396} height={29} />
            </div>
          </div>
        </div>
      </div>



    </footer>
  );
}
