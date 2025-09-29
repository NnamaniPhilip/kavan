// src/app/layout.js
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer"; // Import CartDrawer
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "@/components/CartProvider";

export const metadata = {
  title: "Kavan The Brand - Luxury Turkish Fashion",
  description:
    "Discover exquisite Turkish luxury dresses and fashion. Handcrafted elegance with Ottoman-inspired designs.",
  keywords: [
    "Kavan The Brand",
    "Turkish fashion",
    "luxury dresses",
    "Ottoman designs",
    "handcrafted clothing",
    "Turkish luxury",
    "boutique fashion",
  ].join(", "),
  openGraph: {
    title: "Kavan The Brand - Luxury Turkish Fashion",
    description: "Exquisite Turkish luxury dresses and fashion collections",
    url: "https://www.kavanthebrand.com",
    siteName: "Kavan The Brand",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.kavanthebrand.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="preconnect" href="https://img.clerk.com" />
      </head>
      <body className="antialiased">
        <ClerkProvider>
          <ReduxProvider>
            <CartProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <CartDrawer />
            </CartProvider>
          </ReduxProvider>
        </ClerkProvider>

        <script src="https://js.paystack.co/v1/inline.js" async></script>
      </body>
    </html>
  );
}
