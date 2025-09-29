// src/app/delivery-policy/page.js

const DeliveryPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Delivery Policy – Kavan The Brand
          </h1>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto"></div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-gray-700">
          {/* Order & Production */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Order & Production
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>You'll receive an email confirmation after purchase.</li>
              <li>
                Each piece is made to order: 6–10 business days production
                before shipping.
              </li>
            </ul>
          </section>

          {/* Domestic Shipping */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Domestic Shipping (Nigeria)
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Abuja:</strong> 1–3 working days after production.
              </li>
              <li>
                <strong>Other Nigerian States:</strong> 5–7 working days via
                DHL.
              </li>
            </ul>
          </section>

          {/* International Shipping */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              International Shipping
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                Ships via DHL Express, typically delivered 5–7 working days
                after dispatch.
              </li>
              <li>
                Shipping fees vary by destination and are shown at checkout.
              </li>
              <li>
                Customs duties and taxes are the customer's responsibility.
              </li>
            </ul>
          </section>

          {/* Tracking & Responsibility */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Tracking & Responsibility
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Tracking details are emailed once your order ships.</li>
              <li>
                Please double-check your address and contact info; failed
                deliveries require a re-delivery fee.
              </li>
              <li>
                Kavan the brand is not responsible for customs delays, lost, or
                stolen packages once marked as delivered.
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="bg-[#8B4513] text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="mb-4">
              For questions or any concerns about your order, or our shipping
              policies:
            </p>
            <div className="space-y-2">
              <p className="text-lg">
                <strong>Email:</strong> info@kavanthebrand.com
              </p>
              <p className="text-lg">
                <strong>WhatsApp/Call:</strong> +234 703 621 0107
              </p>
            </div>
          </section>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Thank you for choosing Kavan The Brand. We appreciate your business
            and look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPolicy;
