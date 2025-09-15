"use client";

import usePosts from "../../hooks/usePosts";

export default function ContactPage() {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h1 className="text-success">Contact Page</h1>
      <ul className="list-group">
        {data.slice(0, 5).map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
