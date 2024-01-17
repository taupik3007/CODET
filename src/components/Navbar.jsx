import { Link, Outlet } from "react-router-dom";
import Hamburger from "../components/Hamburger.jsx";
import Profile from "../assets/Profile.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="p-5 w-full flex justify-between items-center fixed bg-white">
        <h1 class="text-sky-700 text-2xl font-extrabold font-primary capitalize">Countify</h1>
        <Hamburger className="w-6 h-6 text-sky-700 md:hidden" />
        <nav className="flex justify-center items-center text-center text-sky-700 text-md font-primary max-md:hidden">
          <ul className="flex space-x-5">
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/chatbot">Chatbot</Link>
            </li>
          </ul>
        </nav>
        <div>
          <img src={Profile} alt="" className="w-12 rounded-full shadow border-2 border-indigo-300" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
