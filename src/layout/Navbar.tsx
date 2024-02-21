import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-midnight-blue">
      <div className="section-wrapper py-[24px] flex items-center justify-between">
        {/* left side */}
        <div>
          <h4>
            Event {""}
            <span
              className="text-electric-blue
          "
            >
              360
            </span>
          </h4>
        </div>

        {/* right side */}
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/dashboard/recent-events">Dashboard</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
