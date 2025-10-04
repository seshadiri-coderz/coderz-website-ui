import Banner from "@/components/Banner/Banner";
import Partner from "@/components/Partner/Partner";
import Services from "@/components/Ourservices/Ourservices";


export default function Home() {
  return (
    <>
      <Banner
        title="Transforming Ideas into Powerful Digital Experiences"
        subtitle="We build high-performance websites, e-commerce platforms, and integrated marketing systems that drive growth and results."
        bgColor="#12152E"
        textColor="text-white"
        background="/images/Banner-back.svg"

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

    </>
  );
}
