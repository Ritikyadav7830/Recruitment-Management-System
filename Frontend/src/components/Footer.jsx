import { Link } from "react-router-dom";

function Footer() {
  return (
<footer className="bg-slate-900 text-white mt-16">

  {/* Top Border */}
  <div className="h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-emerald-500"></div>

  <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* Logo & About */}
    <div>
      <img
        src="Recruitment-Management-System-logo.jpg"
        alt="RMS Logo"
        className="h-14 mb-4 rounded"
      />

      <p className="text-slate-400 leading-7">
        A modern recruitment platform that helps companies
        hire top talent faster and candidates find the right opportunities.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-5">
        Quick Links
      </h3>

      <ul className="space-y-3">
        <li>
          <Link
            to="/"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/applyjob"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            Apply Job
          </Link>
        </li>

        <li>
          <Link
            to="/adminlogin"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            Admin Login
          </Link>
        </li>
      </ul>
    </div>

    {/* Hiring Process */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-5">
        Hiring Process
      </h3>

      <ul className="space-y-3 text-slate-400">
        <li>📝 Apply Online</li>
        <li>📄 Resume Review</li>
        <li>🎯 Shortlisting</li>
        <li>🤝 Interview</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white text-xl font-semibold mb-5">
        Contact
      </h3>

      <div className="space-y-3 text-slate-400">
        <p>📧 hr@company.com</p>
        <p>📱 +91 9876543210</p>
        <p>📍 India</p>
      </div>

      {/* Social */}
      <div className="flex gap-4 mt-6 text-2xl">
        <a href="#" className="hover:text-sky-400 transition">
          💼
        </a>

        <a href="#" className="hover:text-sky-400 transition">
          🐦
        </a>

        <a href="#" className="hover:text-sky-400 transition">
          📘
        </a>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-slate-800 py-6">
    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-slate-500 text-sm">
        © 2026 RMS. All Rights Reserved.
      </p>

      <p className="text-slate-500 text-sm mt-2 md:mt-0">
        Built with React, Node.js & MongoDB 🚀
      </p>

    </div>
  </div>

</footer>
  );
}

export default Footer;