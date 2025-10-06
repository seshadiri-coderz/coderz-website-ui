import Banner from "@/components/Banner/Banner";
import Partner from "@/components/Partner/Partner";
import Services from "@/components/Ourservices/Ourservices";
import AboutUs from "@/components/AboutUs/AboutUs";
import Benifits from "@/components/Benifits/Benifits";
import Testimonial from "@/components/Testimonial/Testimonial";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Consultation from "@/components/Consultation/Consultation";
import FAQs from "@/components/FAQs/FAQs";
import ContactUs from "@/components/ContactUs/ContactUs";
export default function Home() {
  return (
    <>
      <Banner
        title="Transforming Ideas into Powerful Digital Experiences"
        subtitle="We build high-performance websites, e-commerce platforms, and integrated marketing systems that drive growth and results."
        bgColor="#12152E"
         isbtn={true}
        textColor="text-white"
        background="/images/Banner-back.svg"
        bannerimg="/images/Banner-img.svg"

      />
      <Partner
        title="Partner With Us"
        images={[
          "/images/Razopay.svg",
          "/images/Open-Ai.svg",
          "/images/Atlassian.svg",
          "/images/Udemy.svg",
          "/images/Plivo.svg"
        ]}
      />
      <Services
        title="The Solutions we got for our clients"
        subtitle="We are specialists in Software Development, Digital Marketing, and IT Consultancy solutions and we apply our full range of talent to creating the perfect solution for each client’s requirement."
      />
      <AboutUs
        title="Simply being Pragmatic!"
        description="We are a digital solutions company specializing in web development, e-commerce, CRM integration, and performance analytics. Whether you’re launching a new product, optimizing customer relationships, or tracking digital engagement—we bring the technology and strategy to make it happen."
        features={[
          {
            icon: "/images/customer.svg",
            title: "Customer-First",
            text: "We at Coderz completely adhere to customer needs. Collaboratively strategize end-to-end action items."
          },
          {
            icon: "/images/innovation-icon.svg",
            title: "Innovation",
            text: "We work hard to give our best, by regularly upskilling our workforce and staying ahead of latest technology."
          }
        ]}
        // buttonLabel="Request CallBack"
        // buttonAction={() => alert("Callback requested!")}
        image="/images/AboutUs.svg"
        mimage="/images/About-mobile-img.svg"
      />
      <div>

      </div>
      <Benifits
      title="Few Reasons Why You Should Choose Us"
      subtitle="We at Coderz completely adhere to customer needs. Collaboratively strategize end-to-end action items."
      image="/images/Benifit-img.svg"
      />

      <TrustedBy
      title="Those who shared their burden with us!"
       />
       <Consultation
      title="Get a Free Consultation"
      subtitle="Schedule a discovery call with us, our team of experts will give you detailed insights about your business."
      image="/images/Consultation-img.svg"
      />
      <FAQs
      title="FAQs"
      backimg="/images/FAQs-Back.svg"
       />
      <ContactUs
      title="Contact Us"
      description="We’d love to hear from you! Whether it’s a question, feedback, collaboration, or the spark of a new project, your ideas inspire us to create the next big innovation and deliver meaningful solutions together."
      backimg="/images/ContactUs-back.svg"
      />


    </>
  );
}
