// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);

//   // Fetch all bookings
//   useEffect(() => {
//     fetch("http://localhost:5000/bookings")
//       .then((res) => res.json())
//       .then((data) => setBookings(data.bookings || []))
//       .catch((err) => {
//         console.error("Error fetching bookings:", err);
//         Swal.fire({
//           title: "Error",
//           text: "There was an issue fetching the bookings. Please try again later.",
//           icon: "error",
//           confirmButtonText: "OK",
//         });
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section className="py-16">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-semibold mb-8">All Bookings</h2>
//           {bookings.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white shadow-md rounded-lg">
//                 <thead>
//                   <tr className="bg-blue-600 text-white">
//                     <th className="px-6 py-3 text-left">Booking ID</th>
//                     <th className="px-6 py-3 text-left">User ID</th>
//                     <th className="px-6 py-3 text-left">Package</th>
//                     <th className="px-6 py-3 text-left">Group Size</th>
//                     <th className="px-6 py-3 text-left">Total Price</th>
//                     <th className="px-6 py-3 text-left">Status</th>
//                     <th className="px-6 py-3 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {bookings.map((booking) => (
//                     <tr key={booking.booking_id}>
//                       <td className="px-6 py-4">{booking.booking_id}</td>
//                       <td className="px-6 py-4">{booking.CID}</td>
//                       <td className="px-6 py-4">{booking.package_name}</td>
//                       <td className="px-6 py-4">{booking.travellers}</td>
//                       <td className="px-6 py-4">${booking.total_cost}</td>
//                       <td className="px-6 py-4">
//                         {booking.status ? "Confirmed" : "Pending"}
//                       </td>
//                       <td className="px-6 py-4">
//                         {/* Action Buttons (e.g., confirm, cancel) */}
//                         <button
//                           onClick={() =>
//                             handleBookingAction(booking.booking_id)
//                           }
//                           className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
//                         >
//                           Confirm
//                         </button>
//                         <button
//                           onClick={() =>
//                             handleCancelBooking(booking.booking_id)
//                           }
//                           className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 ml-2"
//                         >
//                           Cancel
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p>No bookings found.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// // Handle confirming a booking
// const handleBookingAction = (bookingId) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: `Do you want to confirm this booking?`,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, confirm",
//     cancelButtonText: "No, cancel",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`http://localhost:5000/bookings/confirm/${bookingId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           Swal.fire({
//             title: "Confirmed!",
//             text: "Booking has been confirmed.",
//             icon: "success",
//             confirmButtonText: "OK",
//           });
//           // Update the bookings state to reflect the confirmed booking
//           setBookings((prevBookings) =>
//             prevBookings.map((booking) =>
//               booking.booking_id === bookingId
//                 ? { ...booking, status: true }
//                 : booking
//             )
//           );
//         })
//         .catch((err) => {
//           console.error("Error confirming booking:", err);
//           Swal.fire({
//             title: "Error",
//             text: "There was an issue confirming the booking. Please try again later.",
//             icon: "error",
//             confirmButtonText: "OK",
//           });
//         });
//     }
//   });
// };

// // Handle canceling a booking
// const handleCancelBooking = (bookingId) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: `Do you want to cancel this booking?`,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, cancel",
//     cancelButtonText: "No, keep",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`http://localhost:5000/bookings/cancel/${bookingId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           Swal.fire({
//             title: "Cancelled!",
//             text: "Booking has been cancelled.",
//             icon: "success",
//             confirmButtonText: "OK",
//           });
//           // Update the bookings state to reflect the canceled booking
//           setBookings((prevBookings) =>
//             prevBookings.filter((booking) => booking.booking_id !== bookingId)
//           );
//         })
//         .catch((err) => {
//           console.error("Error canceling booking:", err);
//           Swal.fire({
//             title: "Error",
//             text: "There was an issue canceling the booking. Please try again later.",
//             icon: "error",
//             confirmButtonText: "OK",
//           });
//         });
//     }
//   });
// };

// export default BookingList;

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch all bookings
  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data.bookings || []))
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        Swal.fire({
          title: "Error",
          text: "There was an issue fetching the bookings. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  }, []);

  // Handle confirming a booking
  const handleBookingAction = (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to confirm this booking?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/confirm/${bookingId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Confirmed!",
              text: "Booking has been confirmed.",
              icon: "success",
              confirmButtonText: "OK",
            });
            // Update the bookings state to reflect the confirmed booking
            setBookings((prevBookings) =>
              prevBookings.map((booking) =>
                booking.booking_id === bookingId
                  ? { ...booking, status: true }
                  : booking
              )
            );
          })
          .catch((err) => {
            console.error("Error confirming booking:", err);
            Swal.fire({
              title: "Error",
              text: "There was an issue confirming the booking. Please try again later.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  // Handle canceling a booking
  const handleCancelBooking = (bookingId) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to cancel this booking?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel",
      cancelButtonText: "No, keep",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/cancel/${bookingId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Cancelled!",
              text: "Booking has been cancelled.",
              icon: "success",
              confirmButtonText: "OK",
            });
            // Update the bookings state to reflect the canceled booking
            setBookings((prevBookings) =>
              prevBookings.filter((booking) => booking.booking_id !== bookingId)
            );
          })
          .catch((err) => {
            console.error("Error canceling booking:", err);
            Swal.fire({
              title: "Error",
              text: "There was an issue canceling the booking. Please try again later.",
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">All Bookings</h2>
          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="px-6 py-3 text-left">Booking ID</th>
                    <th className="px-6 py-3 text-left">User ID</th>
                    <th className="px-6 py-3 text-left">Package</th>
                    <th className="px-6 py-3 text-left">Group Size</th>
                    <th className="px-6 py-3 text-left">Total Price</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.booking_id}>
                      <td className="px-6 py-4">{booking.booking_id}</td>
                      <td className="px-6 py-4">{booking.CID}</td>
                      <td className="px-6 py-4">{booking.package_name}</td>
                      <td className="px-6 py-4">{booking.travellers}</td>
                      <td className="px-6 py-4">${booking.total_cost}</td>
                      <td className="px-6 py-4">
                        {booking.status ? "Confirmed" : "Pending"}
                      </td>
                      <td className="px-6 py-4">
                        {/* Action Buttons (e.g., confirm, cancel) */}
                        <button
                          onClick={() =>
                            handleBookingAction(booking.booking_id)
                          }
                          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() =>
                            handleCancelBooking(booking.booking_id)
                          }
                          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 ml-2"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingList;
