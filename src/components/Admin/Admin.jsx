import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin-dashboard",
          {
            withCredentials: true, // Include cookies for authentication
          }
        );

        // Set the data if the request is successful
        setDashboardData(response.data);
      } catch (err) {
        // Handle error if request fails
        setError(err.response?.data?.message || "Access denied. Admins only.");
      }
    };

    fetchAdminData();
  }, []);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!dashboardData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>{dashboardData.message}</p>
    </div>
  );
};

export default Admin;
