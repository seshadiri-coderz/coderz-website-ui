import Banner from "@/components/Banner/Banner";
import PorfolioCard from "@/components/PortfolioCard/PortfolioCard";
 
 
export default function PortfolioPage() {
 
  let data = [
    {
      "image": "images/PortfolioCard img1.png",
      "title": "Pharmaceutical Listing Web Application",
      "subtitle": "Project Core",
      "text": "Web Application Development",
      "subtext": "UI/UX Design"
    },
    {
      "image": "images/PortfolioCard-img2.png",
      "title": "Job Portal Web Application for Recruiters and Candidates",
      "subtitle": "Project Core",
      "text": "Web Application Development",
      "subtext": "UI/UX Design"
    },
    {
      "image": "images/PortfolioCard-img3.png",
      "title": "Appointment, Service, and Employee Management System",
      "subtitle": "Project Core",
      "text": "Web Application Development",
 
    },
    {
      "image": "images/PortfolioCard-img4.png",
      "title": "Cosmetic care mobile app",
      "subtitle": "Project Core",
      "text": "Mobile App Development",
 
    },
    {
      "image": "images/PortfolioCard-img5.png",
      "title": "Website Development For Heath - Tech Business",
      "subtitle": "Project Core",
      "text": "Website Development",
 
    },
    {
      "image": "images/PortfolioCard-img6.png",
      "title": "Dr. Rajeswaran Consultant Physician ",
      "subtitle": "Project Core",
      "text": "Website Development",
 
    }
  ]
  return (
    <div>
      <Banner
        title="Portfolio"
        subtitle="A showcase of projects that seamlessly blend creativity, strategy, and innovation, delivering purposeful solutions with lasting impact"
        bgColor="#12152E"
        textColor="text-white"
        background="/images/Banner-back.svg"
 
      />
      <div>
      </div>
      <div className="container ">
        <div className="cards ">
          <div className="d-flex flex-wrap">
            {data.map((card) => (
              <PorfolioCard
                image={card?.image}
                title={card?.title}
                subtitle={card?.subtitle}
                text={card?.text}
                subtext={card?.subtext}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 