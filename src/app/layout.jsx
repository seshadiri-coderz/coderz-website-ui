import "bootstrap/dist/css/bootstrap.min.css"; 
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import PageTransition from "../components/PageTransition";
import BootstrapClientProvider from "../providers/BootstrapClientProvider";
import TailwindClientProvider from "../providers/TailwindClientProvider";

export const metadata = {
  title: "CoderzVisionTech",
  description: "Next.js 13 App Router + React Query + Tailwind setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TailwindClientProvider>
          <BootstrapClientProvider>
            <ReactQueryProvider>
              <Header />
              <main>
                <PageTransition>{children}</PageTransition>
              </main>
              
              <Footer />
            </ReactQueryProvider>
          </BootstrapClientProvider>
        </TailwindClientProvider>
      </body>
    </html>
  );
}