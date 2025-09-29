// src/app/about-us/page.js

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Kavan</h1>
          <p className="text-gray-600 text-lg">
            Where strength meets softness in contemporary fashion
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 mb-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Kavan</strong> is a contemporary fashion brand for women in
            their soft but powerful era. We create timeless, sophisticated
            pieces that honor both strength and softness, legacy and
            individuality.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Section 1: Who We Are */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">1</span>
              <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Born from the founder's story as a first daughter, Kavan began
                as a love letter to women who carry more than they are given —
                women who lead, nurture, and hold it all together.
              </p>
              <p>
                Today, it has grown into a brand for every woman who embodies
                quiet power and chooses softness without apology.
              </p>
            </div>
          </section>

          {/* Section 2: Our Philosophy */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">2</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Philosophy
              </h2>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <p className="text-purple-800 italic text-lg leading-relaxed">
                "At Kavan, fashion is more than clothing — it is identity,
                affirmation, and legacy."
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Our designs balance structure and fluidity, echoing the
                dualities women navigate daily: resilience and rest, elegance
                and ease, tradition and modernity.
              </p>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-gray-700 font-medium">
                  Each piece is intentionally crafted to whisper: You are seen.
                  You are powerful. You are allowed to be soft.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Mission & Vision */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">3</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Mission & Vision
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Our Mission
                </h3>
                <p className="text-blue-800">
                  To design intentional garments that affirm women's strength
                  and softness, empowering them to lead their lives with
                  elegance, confidence, and ease.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Our Vision
                </h3>
                <p className="text-green-800">
                  To grow into a global fashion house rooted in African elegance
                  and timeless design — creating pieces that carry stories,
                  legacies, and the fullness of womanhood beyond seasons.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Our Values */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">4</span>
              <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-purple-600 font-bold">📜</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Legacy</h3>
                  <p className="text-gray-700">
                    Honoring women's stories, the journeys they walk, and the
                    weight they carry
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 font-bold">👑</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Elegance</h3>
                  <p className="text-gray-700">
                    Designing pieces that are timeless, sophisticated, and
                    versatile
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-pink-600 font-bold">💪</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Strength in Softness
                  </h3>
                  <p className="text-gray-700">
                    Affirming the power found in femininity and rest
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-orange-600 font-bold">✂️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Craftsmanship
                  </h3>
                  <p className="text-gray-700">
                    Creating intentional, well-made garments that last
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-600 font-bold">🌍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Global African Identity
                  </h3>
                  <p className="text-gray-700">
                    Merging local heritage with international relevance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: The Kavan Woman */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">5</span>
              <h2 className="text-2xl font-bold text-gray-900">
                The Kavan Woman
              </h2>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-semibold">
                She is sophisticated yet grounded. Feminine yet commanding.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                She embodies quiet power in the way she carries herself, and
                effortless softness in how she chooses to rest, feel, and
                express her individuality.
              </p>
              <p>
                Whether she is the first-born daughter carrying legacy, or any
                woman navigating her own era of strength and softness — she
                wears Kavan not just as fashion, but as a declaration of her
                presence in the world.
              </p>
            </div>
          </section>

          {/* Section 6: Our Commitment */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">6</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment
              </h2>
            </div>

            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white font-bold">❤️</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  To Every Woman
                </h3>
                <p className="text-gray-700">
                  We are committed to creating fashion that celebrates the
                  beautiful duality of womanhood — where strength and softness
                  coexist in perfect harmony.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-700">
                <strong>Our Promise:</strong> Every Kavan piece is designed with
                intention, crafted with care, and created to empower you to
                embrace your unique journey.
              </p>
            </div>
          </section>

          {/* Join Our Community */}
          <div className="bg-black text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Join the Kavan Community</h3>
            <p className="mb-4 opacity-90">
              Become part of a movement that celebrates the beautiful duality of
              womanhood
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/"
                className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span className="mr-2">👗</span>
                Explore Collections
              </a>
              <a
                href="/contact"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span className="mr-2">💬</span>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
