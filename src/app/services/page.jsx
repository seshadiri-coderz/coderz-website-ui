// src/app/services/page.jsx
export default function ServicesPage() {
  const services = ["web-development", "mobile-apps", "seo"]; // static for build
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
