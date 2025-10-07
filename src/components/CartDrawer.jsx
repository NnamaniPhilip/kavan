// src/components/CartDrawer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/nextjs";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "@/store/CartSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import PayStackPayment from "./PayStackPayment";
import { useCart } from "./CartProvider";

const CartDrawer = () => {
  const { isCartOpen, closeCart } = useCart();
  const { isSignedIn } = useUser();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cartItems || []);

  const emailAddress = useUser()?.user?.primaryEmailAddress?.emailAddress || "";

  const subtotal = cartItems.reduce(
    (total, item) => total + (item?.price || 0) * (item?.quantity || 0),
    0
  );

  const totalAmount = subtotal;

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  };

  // Handle overlay click to close drawer
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  // Don't render anything if cart is not open (for performance)
  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black opacity-50 transition-opacity duration-300"
        onClick={handleOverlayClick}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-2xl font-light text-gray-900">Shopping Cart</h2>
            <button
              onClick={closeCart}
              className="p-1 border hover:bg-gray-100 rounded-full transition-colors"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <HiOutlineShoppingCart size={40} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-600 mb-6">
                  Start shopping to add items to your cart
                </p>
                <button
                  onClick={closeCart}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="py-4 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id || item._id || `cart-item-${index}`} // Fallback keys
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="80px"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0 space-y-3">
                      <h3 className="font-medium text-sm text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="font-semibold text-gray-900">
                        {formatPrice(item.price)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrement(item.id)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Order Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>

                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{formatPrice(totalAmount)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {!isSignedIn ? (
                  <>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                      <p className="text-yellow-700 text-xs">
                        Please sign in to proceed with checkout
                      </p>
                    </div>
                    <Link
                      href="/"
                      className="w-full bg-black text-white py-3 px-6 rounded-xl font-medium text-center block hover:bg-gray-800 transition-colors"
                      onClick={closeCart}
                    >
                      Sign In to Checkout
                    </Link>
                  </>
                ) : (
                  <PayStackPayment
                    email={emailAddress}
                    amount={subtotal * 100}
                  />
                )}

                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="w-full block border border-gray-300 text-gray-700 py-3 px-6 rounded-xl text-center font-bold hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
