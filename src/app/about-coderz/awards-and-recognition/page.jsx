import Banner from "@/components/Banner/Banner";
import AboutCoderz from "@/components/AboutCoderz/AboutCoderz";
import AboutCoderzimg from "@/components/AboutCoderzimg/AboutCoderzimg";
import "./page.css";
import OurCard from "@/components/OurCard/OurCard";
import Testimonials from "@/components/Testimonials/Testimonials";
import AwardRecognition from "@/components/Awards-Recognitions/Awards-Recognitions";

export default function awardsAndRecognition() {
  return (
    <>
      <Banner
        title="Awards & Recognition"
        subtitle="Coderz Vision Technology earns recognition for innovation, quality, and client success—industry awards highlight our excellence, trust, and lasting digital impact."
        bgColor="#12152E"
        isbtn={false}
        textColor="text-white"
        background="/images/Banner-back.svg"
        bannerimg="/Assets/Awards-Recognition.png"
        size="col-lg-6"
      />

      <div className="AboutUs-section py-5">
        <div className="container p-0 d-flex justify-content-center">
          <AboutCoderz
            badge="Our Achievements"
            title="Awards & Recognitions"
            variant={2}
          />
        </div>
        <div className="container p-0 d-flex justify-content-center">
          <AwardRecognition
            imageSrc={"/Assets/A1.png"}
            variant={1}
            btntext="Silicon India"
            title={"Top 10 Best Chennai Startups to Work For 2023"}
            description={`Coderz Vision Technology has been recognised by the Silicon India
            Magazine as one of the "Top 10 Chennai Best Startups to Work for in
            2023".`}
            description2={`While we constantly push our limits and boundaries to provide
            Information Technology services across continents, these mentions
            certainly push our team to do even better!`}
            description3={`We thank the magazine for recognising our efforts.`}
          />
        </div>
        <div className="container p-0 d-flex justify-content-center">
          <AwardRecognition
            imageSrc={"/Assets/A2.png"}
            btntext={"Entrepreneur Awards"}
            variant={2}
            title={"Digital Entrepreneur Award 2023"}
            description={`Many women have taken up a bootstrap business venture to follow their passion for building a workforce while working from home and generating revenue.`}
            description2={`Our CEO Mrs. Priyanka Harish has won the prestigious Award in the Digital Category from honorable Mr. Dayanidhi Maran (Ex Central Minister of Communications and Information Technology of India & Current Member of Parliament in Lok Sabha). Her innovation, Smart work, and outstanding leadership continue to be a driving force for us.`}
            // description3={`We thank the magazine for recognising our efforts.`}
          />
        </div>
      </div>
    </>
  );
}
