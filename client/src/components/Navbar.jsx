import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Company Name */}
        <h1 className="text-2xl font-bold text-blue-900">
          Prakash Tax Solutions
        </h1>

        {/* Menu */}
        <nav className="space-x-6 hidden md:block">
          <Link className="hover:text-blue-700 font-medium" to="/">Home</Link>
          <Link className="hover:text-blue-700 font-medium" to="/about">About</Link>
          <Link className="hover:text-blue-700 font-medium" to="/contact">Contact</Link>
          <Link className="hover:text-blue-700 font-medium" to="/feedback">Feedback</Link>
        </nav>

        {/* Call Button */}
        <a
          href="tel:9734350935"
          className="bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Call Now
        </a>
      </div>
    </header>
  );
}
