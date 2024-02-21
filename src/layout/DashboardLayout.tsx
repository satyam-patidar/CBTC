import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main className="min-h-[calc(100dvh-80px)] grid md:grid-cols-5 lg:grid-cols-12">
      {/* navigation */}
      <aside className="bg-midnight-blue/30 max-md:hidden md:flex flex-col md:col-span-1 lg:col-span-2 p-1 border-r space-y-1">
        <Link
          to="/dashboard/recent-events"
          className="px-4 py-2 rounded hover:bg-midnight-blue duration-300 transition-all"
        >
          Recent Events
        </Link>

        <Link
          to="/dashboard/event-items"
          className="px-4 py-2 rounded hover:bg-midnight-blue duration-300 transition-all"
        >
          Event Items
        </Link>
      </aside>

      {/* content */}
      <section className="md:col-span-4 lg:col-span-10 p-5">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
