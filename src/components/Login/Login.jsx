import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login successful!");

        navigate("/");
      } else {
        alert("Login failed! Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error during login. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 p-6">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-8 transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 animate-fadeInUp">
          Login
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 animate-fadeInUp delay-100"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center animate-fadeInUp delay-200">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
