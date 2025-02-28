import Image from "next/image";

export default function OurStory() {
  return (
    <section className="ftco-section" id="our-story">
      <div className="container mx-auto px-4">
        <div className="row justify-center pb-5">
          <div className="text-center heading-section">
            <span className="clone text-xl mb-3">Our Story</span>
            <h2 className="text-4xl font-bold mb-3">Our Story</h2>
            <p className="mt-5 text-lg italic text-gray-700">
              - <i>Every love story is special, but ours is our favorite—filled with
              laughter, dreams, and a love that feels like home</i> -
            </p>
          </div>
        </div>

        <div className="row">
          <ul className="timeline">
            {/* Timeline Item 1 */}
            <li className="flex flex-col md:flex-row animate-fade">
              <div
                className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full shadow-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/150?text=Image1)",
                }}
              ></div>
              <div className="timeline-panel bg-white shadow-lg rounded-lg p-6 md:text-right">
                <h3 className="timeline-title text-2xl font-bold mb-3">
                  When Paths Crossed
                </h3>
                <p className="text-gray-700">
                  Our journey began in Jaffna during our Advanced Level tuition
                  classes. What seemed like ordinary moments soon turned into
                  something extraordinary as fate brought us together. On October
                  8, 2018, Vino expressed his love, and with Jaksha’s heartfelt
                  acceptance, our story officially began.
                </p>
              </div>
            </li>

            {/* Timeline Item 2 */}
            <li className="flex flex-col md:flex-row-reverse animate-fade">
              <div
                className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full shadow-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/150?text=Image2)",
                }}
              ></div>
              <div className="timeline-panel bg-white shadow-lg rounded-lg p-6">
                <h3 className="timeline-title text-2xl font-bold mb-3">
                  Strength Through the Miles
                </h3>
                <p className="text-gray-700">
                  Over six beautiful years, our love thrived despite the distance.
                  We cherished the precious moments we met—just once every three
                  months—but our bond grew stronger with every challenge we
                  overcame together. This journey proved that true love knows no
                  boundaries and only grows deeper with time.
                </p>
              </div>
            </li>

            {/* Timeline Item 3 */}
            <li className="flex flex-col md:flex-row animate-fade">
              <div
                className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full shadow-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/150?text=Image3)",
                }}
              ></div>
              <div className="timeline-panel bg-white shadow-lg rounded-lg p-6 md:text-right">
                <h3 className="timeline-title text-2xl font-bold mb-3">
                  The Promise of Forever
                </h3>
                <p className="text-gray-700">
                  After years of love, prayers, and perseverance, we shared our
                  dreams with our families. With their blessings, our hearts are
                  filled with gratitude as we prepare to celebrate the beginning of
                  our lifelong journey together. On February 10, 2025, surrounded
                  by family, friends, and loved ones, we will exchange vows and
                  step into a future filled with love, laughter, and endless
                  possibilities.
                </p>
              </div>
            </li>

            {/* Timeline Item 4 */}
            <li className="flex flex-col md:flex-row-reverse animate-fade">
              <div
                className="timeline-badge w-40 h-40 bg-cover bg-center rounded-full shadow-lg"
                style={{
                  backgroundImage: "url(https://via.placeholder.com/150?text=Image4)",
                }}
              ></div>
              <div className="timeline-panel bg-white shadow-lg rounded-lg p-6">
                <h3 className="timeline-title text-2xl font-bold mb-3">
                  A New Chapter Begins
                </h3>
                <p className="text-gray-700">
                  As we look ahead to our life together, we are filled with
                  excitement for the adventures that await us. With every moment
                  shared, we build a foundation of love, trust, and unity. This is
                  not just the end of a chapter but the beginning of a lifetime of
                  happiness and togetherness.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
