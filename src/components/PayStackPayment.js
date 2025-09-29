// src/components/PayStackPayment.js

"use client";

import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/CartSlice";

const PayStackPayment = ({ email, amount }) => {
  const dispatch = useDispatch();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [dateTime, setDateTime] = useState("");

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  const handlePayment = () => {
    if (!publicKey) {
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount,
      currency: "NGN",
      callback: (response) => {
        setPaymentSuccess(true);
        setPaymentMethod(
          response?.channel === "bank" ? "Bank Transfer" : "Card Payment"
        );
        setDateTime(new Date().toLocaleString());
      },
      onClose: function () {
        return;
      },
    });

    handler.openIframe();
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const generatePDF = () => {
    const receiptElement = document.getElementById("receipt");
    html2canvas(receiptElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 0);
      pdf.save("payment-receipt.pdf");
    });
    dispatch(clearCart());
    setPaymentSuccess(false);
  };

  return (
    <>
      <button
        onClick={handlePayment}
        className="bg-black text-white text-lg rounded-xl w-full py-2 cursor-pointer"
      >
        Proceed To Checkout
      </button>

      {paymentSuccess && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 h-screen w-screen flex items-center justify-center z-50">
          <div className="relative rounded-xl bg-black py-10 px-2">
            <span
              className="absolute top-2 left-2 py-[5px] px-3 border rounded-full border-gray text-gray text-xl cursor-pointer"
              onClick={() => {
                dispatch(clearCart());
                setPaymentSuccess(false);
              }}
            >
              X
            </span>

            <div className="flex flex-col items-center my-4 gap-3">
              <div className="w-fit rounded-full p-3 bg-green-200 bg-opacity-20">
                <IoMdCheckmarkCircleOutline className="text-green-400 text-4xl" />
              </div>
              <p className="text-green-400 text-xl font-medium">
                Payment Success!
              </p>
            </div>

            <div
              id="receipt"
              className="my-7 p-3 flex flex-col gap-5 bg-gray-800 rounded-xl text-sm text-gray-400"
            >
              <p className="flex justify-between">
                <span>Amount:</span>
                <span className="text-white">
                  NGN {formatter.format(amount / 100).slice(3)}
                </span>
              </p>

              <p className="flex justify-between">
                <span>Payment Status:</span>
                <span className="py-1 px-2 text-xs bg-green-200/20 text-green-500 rounded-full">
                  Success
                </span>
              </p>

              <hr />

              <p className="flex justify-between gap-10">
                <span>Payment Time:</span>
                <span className="text-white">{dateTime}</span>
              </p>

              <p className="flex justify-between">
                <span>Payment Method:</span>
                <span className="text-white">{paymentMethod}</span>
              </p>

              <p className="flex justify-between gap-10">
                <span>Sender Email:</span>
                <span className="text-white">{email}</span>
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-20 font-semibold text-sm">
              <span
                onClick={generatePDF}
                className="w-full p-2 rounded-xl border border-gold text-gold text-center cursor-pointer"
              >
                Download PDF Receipt
              </span>

              <Link
                href="/"
                onClick={() => {
                  dispatch(clearCart());
                  setPaymentSuccess(false);
                }}
                className="w-full p-2 rounded-xl bg-gold text-black text-center"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PayStackPayment;
