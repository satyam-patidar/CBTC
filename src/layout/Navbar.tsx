import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="section-wrapper py-[24px] flex items-center justify-between">
      {/* left side */}
      <div>
        <h4>
          Event {""}
          <span
            className="text-secondary
          "
          >
            360
          </span>
        </h4>
      </div>

      {/* right side */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
