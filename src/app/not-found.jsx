import { Typo } from "@/components";
export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <Typo variant="h1" color="danger">404 - Page Not Found</Typo>
      <Typo variant="p" className="mt-3 text-muted">
        Oops! The page you are looking for doesn’t exist.
      </Typo>
      <a href="/" className="btn btn-primary mt-4 px-4 py-2">
        Back to Home
      </a>
    </div>
  );
}
