import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactQueryProvider from '../providers/ReactQueryProvider';

export const metadata = {
  title: "CoderzVisionTech",
  description: "Next.js 13 App Router + React Query + Bootstrap setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Header />
          <main className="container my-4">{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
