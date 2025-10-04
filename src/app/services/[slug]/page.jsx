// src/app/services/[slug]/page.jsx
export default function ServicePage({ params }) {
  return (
    <div>
      <h1>Service: {params.slug}</h1>
    </div>
  );
}

// Required for static export with dynamic routes
export async function generateStaticParams() {
  const slugs = ["web-development", "mobile-apps", "seo"]; // Replace with your real slugs
  return slugs.map((slug) => ({ slug }));
}
