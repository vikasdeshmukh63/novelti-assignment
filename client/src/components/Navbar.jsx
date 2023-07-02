import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  // using useLocation hook to access the current url path 
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className="w-full sm:px-20 2xl:px-96 xl:px-40 h-16 bg-gray-800 flex justify-between items-center px-4 fixed top-0 left-0 z-10">
      <h1 className="text-2xl font-bold text-red-500">FORM</h1>
      <div className="flex gap-3 font-semibold text-white overflow-x-auto">
        <Link
          to="/"
          className={`${currentUrl === "/" && "bg-gray-900"} text-white rounded-md px-3 py-2 text-sm font-medium`}
        >
          Home
        </Link>
        <Link
          to="/users"
          className={`${currentUrl === "/users" && "bg-gray-900"} text-white rounded-md px-3 py-2 text-sm font-medium`}
        >
          Users
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
