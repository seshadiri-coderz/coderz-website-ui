import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <Link href="/" className="navbar-brand">CoderzVisionTech</Link>
            <div className="navbar-nav">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/about-coderz" className="nav-link">About</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}
