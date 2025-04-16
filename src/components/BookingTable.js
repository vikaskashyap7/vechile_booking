export default function BookingTable({ bookings }) {
  const statusStyles = {
    Confirmed: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
    Pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="overflow-x-auto rounded shadow-lg bg-white mt-6 ">
      <table className="min-w-full divide-y divide-gray-200 text-sm ">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 text-left">Booking ID</th>
            <th className="px-6 py-3 text-left">Customer</th>
            <th className="px-6 py-3 text-left">Vehicle</th>
            <th className="px-6 py-3 text-left">Pickup</th>
            <th className="px-6 py-3 text-left">Drop-off</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {bookings.map((b) => (
            <tr key={b.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium text-blue-600">
                <a href={`/bookings/${b.id}`} className="hover:underline">{b.id}</a>
              </td>
              <td className="px-6 py-4 text-gray-700">{b.customerName}</td>
              <td className="px-6 py-4 text-gray-700">{b.vehicleType}</td>
              <td className="px-6 py-4 text-gray-700">{b.pickup}</td>
              <td className="px-6 py-4 text-gray-700">{b.dropoff}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[b.status] || "bg-gray-200 text-gray-700"}`}>
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
