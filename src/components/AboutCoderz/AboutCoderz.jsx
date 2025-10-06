import { MainBadge } from "../Typo/Typo";
import "./AboutCoderz.css";

export default function AboutCoderz({ badge, title, subtitle ,  variant = 1}) {
  return (
    <section className="AboutUs-section">
      <div className="container">
        <div className="gap-css">
          <div className={`variant-css-${variant}`}>
            <MainBadge text={badge} />
          </div>
          <div className="gap-css">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
