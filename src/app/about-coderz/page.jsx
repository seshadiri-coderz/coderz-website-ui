import Banner from "@/components/Banner/Banner";
import AboutCoderz from "@/components/AboutCoderz/AboutCoderz";
import AboutCoderzimg from "@/components/AboutCoderzimg/AboutCoderzimg";
import "./page.css";
import OurCard from "@/components/OurCard/OurCard";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function AboutPage() {
  return (
    <>
      <Banner
        title="Shaping Creative Ideas Into Powerful Digital Impact"
        subtitle="We specialize in web development, e-commerce, CRM integration, and analytics for business growth."
        bgColor="#12152E"
        isbtn={false}
        textColor="text-white"
        background="/images/Banner-back.svg"
        bannerimg="/Assets/About-as-banner-img.png"
        size="col-lg-6"
      />

      <div className="AboutUs-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <AboutCoderz
                badge="About Coderz"
                title="Let’s work and create together"
                subtitle="We are a digital solutions company specializing in web development, e-commerce, CRM integration, and performance analytics. Whether you’re launching a new product, optimizing customer relationships, or tracking digital engagement—we bring the technology and strategy to make it happen."
              />
            </div>
            <div className="col-12 col-lg-6">
              <AboutCoderzimg
                variant={1}
                image="/Assets/Rectangle 4238.png"
                logo="/Assets/Vector.png"
              />
            </div>
          </div>

          <div className="our-card py-5 row px-4">
            <div className="col-12 col-lg-4" style={{ backgroundColor: "#D9D9D90F" }}>
              <OurCard
                image={"/Assets/Frame 1410102966.png"}
                title={"Our Mission"}
                description={
                  "Our mission is to provide innovative, transformative services while staying ahead of the curve in terms of technology and industry trends. We believe that by doing this, we can help our customers stay competitive in an ever-evolving digital landscape."
                }
              />
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center pb-3 pb-lg-0">
              <img src="/Assets/people.png" alt="" />
            </div>
            <div className="col-12 col-lg-4" style={{ backgroundColor: "#D9D9D90F" }}>
              <OurCard
                image={"/Assets/Frame 1410102966.png"}
                title={"Our Vision"}
                description={
                  "The vision of our software development company is to provide our customers with high-quality, reliable services that are tailored to their needs while always striving for business outcome-driven measurements."
                }
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-12 col-lg-6 order-2 order-lg-1 ">
              <AboutCoderzimg
                variant={2}
                image="/Assets/people2.png"
                logo="/Assets/Group.png"
              />
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <AboutCoderz
                badge="About Coderz"
                title="Let’s work and create together"
                subtitle="We are a digital solutions company specializing in web development, e-commerce, CRM integration, and performance analytics. Whether you’re launching a new product, optimizing customer relationships, or tracking digital engagement—we bring the technology and strategy to make it happen."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="AboutUs-section py-5">
        <div className="container">
          <Testimonials
            badge="Testimonials"
            title="Not to brag! Others believe we are fantastic
at what we do!"
          />
        </div>
      </div>
    </>
  );
}
