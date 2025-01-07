// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/categories")
//       .then((res) => res.json())
//       .then((data) => setCategories(data))
//       .catch((err) => console.error("Error fetching categories:", err));
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Trip Categories Section */}
//       <section id="categories" className="py-16 bg-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-8">Trip Categories</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//               >
//                 <h3 className="text-xl font-bold mb-4">{category.name}</h3>
//                 <p className="text-gray-700 mb-4">{category.description}</p>
//                 <Link
//                   to={`/packages/${category.id}`}
//                   className="bg-blue-600 text-white px-6 py-2 rounded-full"
//                 >
//                   View Packages
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-blue-600 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2025 Trip Planner. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className=" min-h-screen ">
      {/* Trip Categories Section */}
      <section id="categories" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Trip Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-blue-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <Link
                  to={`/packages/${category.id}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  View Packages
                </Link>
              </div>
            ))}
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
