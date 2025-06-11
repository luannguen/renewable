import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToastProvider from "@/components/providers/ToastProvider";
import { BreadcrumbProvider } from "@/components/providers/BreadcrumbProvider";
import BackToTop from "@/components/ui/BackToTop";
import FloatingBreadcrumb from "@/components/ui/FloatingBreadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RenewWeb - Green Energy Solutions",
  description: "Professional renewable energy solutions for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BreadcrumbProvider>
          <ToastProvider>
            <div className="min-h-screen bg-white">
              <Header />
              {children}
              <Footer />
            </div>
          </ToastProvider>
          <FloatingBreadcrumb />
        </BreadcrumbProvider>
        <BackToTop />
      </body>
    </html>
  );
}
