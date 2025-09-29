// src/components/Footer.jsx
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="py-8 container mx-auto max-w-7xl bg-gray-200">
      <div className="grid md:grid-cols-3 gap-8 mb-8 px-4">
        {/* Contact Info */}
        <div className="text-[0.88rem] space-y-3">
          <h3 className="text-sm font-semibold">Contact Us</h3>
          <div className="space-y-2">
            <p>
              <span className="">Call:</span>{" "}
              <a href="tel:+2347036210107" className="hover:text-white">
                +234 703 621 0107
              </a>
            </p>
            <p>
              <span className="">Email:</span>{" "}
              <a
                href="mailto:admin@kavanthebrand.com"
                className="hover:text-white"
              >
                admin@kavanthebrand.com
              </a>
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.instagram.com/kavanthebrand"
              target="_blank"
            >
              <FaInstagram size={24} className="hover:text-white" />
            </Link>
            <Link href="https://wa.me/2347036210107" target="_blank">
              <BsWhatsapp size={21} className="hover:text-white" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-[0.88rem] space-y-3">
          <h3 className="font-semibold text-sm text-center">Quick Links</h3>

          <div className="flex justify-between">
            <div className="space-y-2">
              <Link href="/contact-us" className="block hover:text-white">
                Contact Us
              </Link>
              <Link href="/about-us" className="block hover:text-white">
                About Us
              </Link>
              <Link href="/founders-story" className="block hover:text-white">
                Founder's Story
              </Link>
            </div>

            <div className="space-y-2">
              <Link href="/delivery-policy" className="block hover:text-white">
                Delivery Policy
              </Link>
              <Link href="/privacy-policy" className="block hover:text-white">
                Privacy Policy
              </Link>
              <Link
                href="/refund-and-exchange-policy"
                className="block hover:text-white"
              >
                Returns & Exchanges
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="border-t border-gray-700 pt-4 text-center text-xs">
        Copyright © Kavan The Brand {date}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
