export default function PortfolioPage({ params }) {
  return (
    <div>
      <h1>Portfolio: {params.slug}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  // replace with your actual slugs (from CMS, API, or hardcoded)
  const slugs = ["project-1", "project-2", "project-3"];

  return slugs.map((slug) => ({ slug }));
}
