import { getBookings } from "../../../lib/getBookings";

export default async function BookingDetailsPage({ params }) {
  const bookings = await getBookings();
  const booking = bookings.find((b) => b.id === params.id);

  if (!booking) return <p className="text-center text-gray-500">Booking not found.</p>;

  return (
    <div className="space-y-8 p-6 sm:p-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking Details</h1>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Booking Info</h2>
        <div className="space-y-2 text-gray-600">
          <p><strong className="text-gray-800">ID:</strong> {booking.id}</p>
          <p><strong className="text-gray-800">Vehicle:</strong> {booking.vehicleType}</p>
          <p><strong className="text-gray-800">Pickup:</strong> {booking.pickup}</p>
          <p><strong className="text-gray-800">Drop-off:</strong> {booking.dropoff}</p>
          <p><strong className="text-gray-800">Status:</strong> <span className={`font-semibold ${booking.status === 'Confirmed' ? 'text-green-600' : 'text-red-600'}`}>{booking.status}</span></p>
        </div>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customer Info</h2>
        <div className="space-y-2 text-gray-600">
          <p><strong className="text-gray-800">Name:</strong> {booking.customerName}</p>
          <p><strong className="text-gray-800">Email:</strong> <a href={`mailto:${booking.customerEmail}`} className="text-blue-600">{booking.customerEmail}</a></p>
          <p><strong className="text-gray-800">Phone:</strong> {booking.customerPhone}</p>
          <p><strong className="text-gray-800">Address:</strong> {booking.customerAddress}</p>
        </div>
      </div>

      <div className="flex justify-start space-x-4">
        <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg transition-all hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">Edit</button>
        <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg transition-all hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Cancel</button>
      </div>
    </div>
  );
}
