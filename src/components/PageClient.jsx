// src/components/PageClient.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoVolumeHighSharp, IoVolumeMute } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/CartSlice";
import { useCart } from "./CartProvider";
import { urlFor } from "@/sanity/lib/image";
import useEmblaCarousel from "embla-carousel-react";
import ProductModal from "./ProductModal";
import NewsletterPopup from "./NewsletterPopup";
import Link from "next/link";

// Brand Story Carousel Component
const BrandStoryCarousel = ({ product }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 15,
  });

  // Auto-slide effect
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden h-full" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {product.image.map((img, index) => (
          <div
            className="embla__slide flex-shrink-0 w-full h-full relative"
            key={img._key || index}
          >
            <Image
              src={urlFor(img).width(600).height(600).url()}
              alt={`${product.name} - View ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Brand Story Product Card Component
const BrandStoryProductCard = ({ product }) => {
  return (
    <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl group">
      {product.image.length > 1 ? (
        <BrandStoryCarousel product={product} />
      ) : (
        <Image
          src={urlFor(product.image[0]).width(600).height(600).url()}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      )}
    </div>
  );
};

export default function Home({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlides, setCurrentSlides] = useState({});
  const dispatch = useDispatch();
  const { openCart } = useCart();

  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Auto-slide effect for homepage grid only
  useEffect(() => {
    const intervals = {};

    products.forEach((product) => {
      if (product.image.length > 1) {
        intervals[product._id] = setInterval(() => {
          setCurrentSlides((prev) => ({
            ...prev,
            [product._id]:
              ((prev[product._id] || 0) + 1) % product.image.length,
          }));
        }, 3000);
      }
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, [products]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleAddToCart = (product) => {
    // Use the original product structure from Sanity
    const cartProduct = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: urlFor(product.image[0]).width(300).height(400).url(),
    };

    dispatch(addToCart(cartProduct));
    setSelectedProduct(null);
    openCart();
  };

  const handleProductClick = (product) => {
    // Create consistent modal product structure
    const modalProduct = {
      ...product,
      processedImages: product.image.map((img) =>
        urlFor(img).width(600).height(800).url()
      ),
    };
    setSelectedProduct(modalProduct);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section with Video */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 left-4 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <IoVolumeMute size={20} />
            ) : (
              <IoVolumeHighSharp size={20} />
            )}
          </button>

          {/* Order Now Button - Bottom Center */}
          <div className="absolute bottom-5.5 left-1/2 transform -translate-x-1/2 z-20">
            <Link
              href="/shop"
              className="bg-white/70 text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl flex items-center space-x-2 group"
            >
              <span>Order Now</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 z-0" />
        </div>
      </section>

      {/* Enhanced Featured Collections */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-2xl md:text-5xl mb-3 font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">
              Curated Collection
            </h2>
            <p className="text-gray-600 max-w-2xl font-semibold mx-auto">
              Discover pieces that transform your wardrobe and elevate your
              style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => {
              const currentSlide = currentSlides[product._id] || 0;
              const displayImage = product.image[currentSlide]
                ? urlFor(product.image[currentSlide])
                    .width(600)
                    .height(800)
                    .url()
                : "/fallback-image.jpg";

              return (
                <div
                  key={product._id}
                  className="group cursor-pointer transform hover:-translate-y-4 transition-all duration-500"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded-2xl shadow-2xl">
                    <Image
                      src={displayImage}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                        New
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <button className="cursor-pointer w-full bg-white text-black py-3 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <div className="text-center p-2">
                    <h3 className="font-light text-2xl mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Brand Story Section with Carousel Slider */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {products.slice(0, 2).map((product, index) => (
                  <div key={product._id} className="relative group">
                    <BrandStoryProductCard product={product} />

                    {/* Show overlay only on the first product in left column */}
                    {index === 0 && (
                      <>
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none" />

                        {/* Best Seller & Shop Now Overlay */}
                        <div
                          className="absolute inset-0 flex flex-col justify-end p-4 cursor-pointer rounded-2xl z-10"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className="space-y-2">
                            {/* Best Seller Text - Bottom Left */}
                            <div className="text-left text-white text-xs font-semibold">
                              BEST SELLER
                            </div>

                            {/* Shop Now Button */}
                            <button className="text-white font-semibold text-sm w-fit border-b">
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6 mt-12">
                {products.slice(2, 4).map((product, index) => (
                  <div key={product._id} className="relative group">
                    <BrandStoryProductCard product={product} />

                    {/* Show overlay only on the first product in right column */}
                    {index === 0 && (
                      <>
                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none" />

                        {/* Best Seller & Shop Now Overlay */}
                        <div
                          className="absolute inset-0 flex flex-col justify-end p-4 cursor-pointer rounded-2xl z-10"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className="space-y-2">
                            {/* Best Seller Text - Bottom Left */}
                            <div className="text-left text-white text-xs font-semibold">
                              BEST SELLER
                            </div>

                            {/* Shop Now Button */}
                            <button className="text-white font-semibold text-sm w-fit border-b">
                              Shop Now
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Philosophy
                </span>
                <h2 className="text-5xl font-light mb-6 text-gray-900">
                  Designed for Life's Moments
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-gray-900">
                      Quality Craftsmanship
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Every stitch tells a story of dedication and excellence
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-2xl">♻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-gray-900">
                      Sustainable Choices
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Materials that respect both people and planet
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-gray-900">
                      Timeless Appeal
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Pieces designed to transcend seasonal trends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-light mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Join Our Style Community
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get exclusive access to new collections, styling tips, and special
            offers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-2xl focus:outline-none focus:border-white text-white placeholder-gray-400 text-lg"
            />
            <button className="bg-white text-black px-8 py-2 rounded-2xl hover:bg-gray-200 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Subscribe
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            By subscribing, you agree to our Privacy Policy. Unsubscribe at any
            time.
          </p>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />

      {/* Newsletter Popup */}
      <NewsletterPopup />
    </main>
  );
}
