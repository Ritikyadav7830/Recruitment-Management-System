import { Link, NavLink } from "react-router-dom";

function PublicHeader() {

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto h-[70px] flex justify-between items-center px-6">

        {/* Logo */}
         <Link to="/">
            <img
              src="Recruitment-Management-System-logo.jpg"
              alt="RMS Logo"
              className="h-12 w-auto rounded hover:scale-105 transition duration-300"
            />
         </Link>
         
          <nav>
            <ul className="flex items-center gap-8">

              <li>
                <Link to="/" className="relative text-[17px] font-medium hover:text-sky-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-sky-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full" > Home </Link>
              </li>

              <li>
                <Link
                  to="/applyjob"
                  className="relative text-[17px] font-medium hover:text-sky-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-sky-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Apply Job
                </Link>
              </li>

              <li>
                <Link to="/adminlogin" className="relative text-[17px] font-medium hover:text-sky-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-sky-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full" > Admin Login </Link>
              </li>

            </ul>
          </nav>
      </div>
    </header>
  );
}

export default PublicHeader;