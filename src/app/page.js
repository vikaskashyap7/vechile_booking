import BookingTable from "../components/BookingTable";
import Stats from "../components/Stats";

import { getBookings } from "../lib/getBookings";

export default async function HomePage() {
  const bookings = await getBookings();

  return (
    <div >
      <h1 className="text-2xl  mb-4 font-black ">Vehicle Bookings Dashboard</h1>
      <Stats bookings={bookings} />
     
      <BookingTable bookings={bookings} />
    </div>
  );
}