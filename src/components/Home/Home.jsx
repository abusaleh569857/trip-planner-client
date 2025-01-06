import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Trip Categories Section */}
      <section id="categories" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Trip Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-4">Adventure Trips</h3>
              <p className="text-gray-700">
                Explore thrilling adventures around the country.
              </p>
            </div>
            <div className="bg-green-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-4">Nature Escapes</h3>
              <p className="text-gray-700">
                Discover the beauty of nature with peaceful trips.
              </p>
            </div>
            <div className="bg-yellow-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-4">Cultural Tours</h3>
              <p className="text-gray-700">
                Dive into the rich culture and heritage of Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trips Section */}
      <section id="featured" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Featured Trips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Trip 1"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Trip to Sundarbans</h3>
              <p className="text-gray-600 mb-4">
                Experience the beauty of the mangrove forests and wildlife.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Book Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Trip 2"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Trip to Cox's Bazar</h3>
              <p className="text-gray-600 mb-4">
                Relax and enjoy the longest unbroken sea beach in the world.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Book Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Trip 3"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Trip to Srimangal</h3>
              <p className="text-gray-600 mb-4">
                Visit the tea gardens and enjoy the scenic views.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Trip Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
