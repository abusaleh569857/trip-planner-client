import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    country: "Bangladesh",
    gender: "Male",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(?:\+8801|01)[3-9]\d{8}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Invalid email format for Bangladesh. Please enter a valid email.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      alert(
        "Invalid phone number format for Bangladesh. Please enter a valid phone number."
      );
      return;
    }

    const userData = { ...formData };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
          password: "",
          country: "Bangladesh",
          gender: "Male",
        });
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error during registration. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex items-center justify-center p-6 animate-fade-in">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-slide-in">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "First Name", name: "first_name", type: "text" },
            { label: "Last Name", name: "last_name", type: "text" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Nepal">Nepal</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Pakistan">Pakistan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold text-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline hover:text-indigo-500"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
