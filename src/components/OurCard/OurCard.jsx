import './OurCard.css';
export default function OurCard({ image, title, description }) {
  return (
    <div className="ourcard">
        <div>
      <img src={image} alt={title} className="our-card-image" />
        </div>
      <h3 className="our-card-title">{title}</h3>
      <p className="our-card-description">{description}</p>
    </div>
  );
}