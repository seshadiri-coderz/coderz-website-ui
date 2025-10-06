import "./PortfolioCard.css";
 
export default function PorfolioCard({ image, title, subtitle, text, subtext }) {
    return (
       
            <div className="portfolio-card ">
                <img src={image} alt={title} className="img-fluid portfolio-img"/>
                <div>
                    <h3 className="portfolio-card-title">{title}</h3>
                </div>
                <div className="px-3">
                    <span className="portfolio-card-subtitle ">{subtitle}</span>
                </div>
                <div className="portfolio-card-text">
                    <div><span className="card-text1 d-block">{text}</span></div>
                    {subtext && <div> <span className="card-text2 d-block">{subtext}</span></div>}
                </div>
            </div>           
       
    );
}