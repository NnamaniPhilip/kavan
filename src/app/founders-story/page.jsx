// src/app/founders-story/page.js

const FoundersStory = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Founder's Story
          </h1>
          <p className="text-gray-600 text-lg">
            From personal journey to purposeful brand
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 mb-6">
          <div className="bg-pink-50 p-4 rounded-lg mb-4">
            <p className="text-pink-800 italic text-lg leading-relaxed text-center">
              "I never planned to be in fashion."
            </p>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            The heartfelt journey behind <strong>Kavan</strong> — a brand born
            from personal transformation
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Section 1: The Beginning */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">1</span>
              <h2 className="text-2xl font-bold text-gray-900">
                The First Daughter
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For most of my life, I was the first daughter who carried the
                weight of responsibility with ease—always strong, always moving,
                always making money.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Caring for everyone else came naturally; caring for myself
                  rarely crossed my mind.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: The Turning Point */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">2</span>
              <h2 className="text-2xl font-bold text-gray-900">
                The Turning Point
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  A New Chapter: Motherhood
                </h3>
                <p className="text-green-800">
                  Everything shifted after I gave birth to my son in March 2024.
                </p>
              </div>

              <p>
                Six months later, hormonal changes meant the clothes I owned no
                longer felt like me. They didn't celebrate my femininity or the
                softer woman I was becoming.
              </p>

              <div className="bg-purple-50 p-3 rounded">
                <p className="text-purple-700 font-medium">
                  The clothes that once fit my life no longer fit my soul.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Awakening */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">3</span>
              <h2 className="text-2xl font-bold text-gray-900">
                The Awakening
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I began creating pieces that made me feel elegant, radiant, and
                effortlessly feminine— clothing that let me care for myself
                without trying too hard.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  Self-Care Through Style
                </h3>
                <p className="text-yellow-800">
                  What started as a personal journey to honor my own softness
                  became a dream worth sharing.
                </p>
              </div>

              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-pink-600 font-bold">✨</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    For the first time, I understood that clothing could be more
                    than fabric — it could be armor, comfort, and celebration
                    all at once.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: The Birth of Kavan */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">4</span>
              <h2 className="text-2xl font-bold text-gray-900">
                The Birth of Kavan
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-red-800 text-lg font-semibold text-center">
                  That dream grew into Kavan
                </p>
              </div>

              <p>
                A brand for women who, like me, have spent years being strong
                for everyone else and are ready to celebrate themselves—soft,
                powerful, and beautifully feminine.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    For the Strong Women
                  </h3>
                  <p className="text-pink-800 text-sm">
                    Who have carried weight for others and are now ready to
                    carry themselves with grace
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    For the Soft Women
                  </h3>
                  <p className="text-purple-800 text-sm">
                    Who are embracing their femininity without losing their
                    power
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: The Promise */}
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex items-start mb-4">
              <span className="text-2xl font-bold text-gray-900 mr-3">5</span>
              <h2 className="text-2xl font-bold text-gray-900">Our Promise</h2>
            </div>

            <div className="bg-black text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">
                To Every Woman Who Wears Kavan
              </h3>
              <p className="mb-4 opacity-90">
                You are not just wearing clothing — you are wearing a story of
                transformation, a celebration of softness, and a declaration of
                your beautiful complexity.
              </p>
              <div className="bg-white/10 p-3 rounded">
                <p className="font-semibold">
                  You are seen. You are powerful. You are allowed to be soft.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Join the Movement</h3>
            <p className="mb-4 opacity-95">
              From my personal journey to our shared vision — wear your story
              with pride
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-pink-600 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span className="mr-2">👗</span>
                Discover the Collection
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center bg-black/20 hover:bg-black/30 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span className="mr-2">📖</span>
                Learn More About Kavan
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoundersStory;
