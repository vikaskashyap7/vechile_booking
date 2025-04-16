import { CalendarCheck2, CalendarX2, ClipboardList } from "lucide-react";

export default function Stats({ bookings }) {
  const total = bookings.length;
  const confirmed = bookings.filter(b => b.status === "Confirmed").length;
  const cancelled = bookings.filter(b => b.status === "Cancelled").length;

  const stats = [
    {
      label: "Total Bookings",
      value: total,
      icon: <ClipboardList className="text-blue-600 w-6 h-6" />,
      bg: "bg-blue-50",
    },
    {
      label: "Confirmed",
      value: confirmed,
      icon: <CalendarCheck2 className="text-green-600 w-6 h-6" />,
      bg: "bg-green-50",
    },
    {
      label: "Cancelled",
      value: cancelled,
      icon: <CalendarX2 className="text-red-600 w-6 h-6" />,
      bg: "bg-red-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:ml-10 lg:mt-10">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`flex items-center lg:w-80 gap-4 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ${stat.bg}`}
        >
          <div className="p-3 bg-white rounded-full shadow">{stat.icon}</div>
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xl font-semibold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
