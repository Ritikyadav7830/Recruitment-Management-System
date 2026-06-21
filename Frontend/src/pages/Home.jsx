import { Link, Navigate, useNavigate } from "react-router-dom";

function Home() {

  const navigate =useNavigate();
  const applyHandler = () =>{
     navigate("/applyjob")
  }
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-sky-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Recruitment Management System
          </span>

          <h1 className="text-6xl md:text-5xl font-extrabold leading-tight mb-6">
            Hire Smarter.
            <br />
            <span className="text-sky-300">
              Build Stronger Teams.
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Streamline recruitment, manage applications, review resumes,
            and shortlist top talent through a modern hiring platform.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/applyjob"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition duration-300"
            >
              Apply Now →
            </Link>

            <Link
              to="/adminlogin"
              className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition duration-300"
            >
              Admin Login
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">

            <div>
              <h3 className="text-3xl font-bold text-sky-300">
                500+
              </h3>
              <p className="text-blue-100">
                Applications
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-300">
                100+
              </h3>
              <p className="text-blue-100">
                Candidates Hired
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-sky-300">
                95%
              </h3>
              <p className="text-blue-100">
                Success Rate
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
            Hiring Process
          </h2>

          <p className="text-center text-gray-600 mb-14">
            Our streamlined recruitment process helps us find the best talent efficiently.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="relative bg-gradient-to-br from-sky-500 to-blue-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-4 left-6 bg-white text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                1
              </div>

              <div className="text-4xl mb-4 mt-4">📝</div>

              <h3 className="font-bold text-2xl mb-3">
                Apply Online
              </h3>

              <p className="text-blue-100">
                Submit your personal, educational and professional details.
              </p>
            </div>

            
            <div className="relative bg-gradient-to-br from-purple-500 to-indigo-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-4 left-6 bg-white text-purple-700 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                2
              </div>

              <div className="text-4xl mb-4 mt-4">📄</div>

              <h3 className="font-bold text-2xl mb-3">
                Resume Review
              </h3>

              <p className="text-purple-100">
                Recruiters carefully review your profile and resume.
              </p>
            </div>

          
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-4 left-6 bg-white text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                3
              </div>

              <div className="text-4xl mb-4 mt-4">🎯</div>

              <h3 className="font-bold text-2xl mb-3">
                Shortlisting
              </h3>

              <p className="text-green-100">
                Qualified candidates are shortlisted for the next stage.
              </p>
            </div>

          
            <div className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-4 left-6 bg-white text-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                4
              </div>

              <div className="text-4xl mb-4 mt-4">🤝</div>

              <h3 className="font-bold text-2xl mb-3">
                Interview
              </h3>

              <p className="text-orange-100">
                Selected candidates are invited for interviews.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
            Why Choose Our Platform?
          </h2>

          <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
            Simplify recruitment with powerful tools designed for both
            candidates and recruiters.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold mb-3">
                Easy Application
              </h3>

              <p className="text-blue-100">
                Apply for opportunities quickly through a simple,
                user-friendly application process.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-700 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">📄</div>

              <h3 className="text-2xl font-bold mb-3">
                Resume Management
              </h3>

              <p className="text-purple-100">
                Manage candidate profiles and resumes efficiently
                from a centralized dashboard.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-700 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
              <div className="text-4xl mb-4">🎯</div>

              <h3 className="text-2xl font-bold mb-3">
                Efficient Hiring
              </h3>

              <p className="text-green-100">
                Review, shortlist and manage applicants faster
                with streamlined workflows.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">
            Current Openings
          </h2>

          <p className="text-center text-gray-600 mb-14">
            Explore exciting opportunities and build your career with us.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Frontend */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-4xl mb-4">💻</div>

              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                React.js
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                Frontend Developer
              </h3>

              <p className="text-blue-100 mb-6">
                Build modern, responsive user interfaces using React.js
                and Tailwind CSS.
              </p>

              <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-xl" onClick={applyHandler}>
                Apply Now
              </button>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-4xl mb-4">⚙️</div>

              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                Backend Developer
              </h3>

              <p className="text-purple-100 mb-6">
                Develop secure APIs and scalable backend systems
                using Node.js, Express and MongoDB.
              </p>

              <button className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-xl" onClick={applyHandler}>
                Apply Now
              </button>
            </div>

            {/* MERN */}
            <div className="bg-gradient-to-br from-emerald-500 to-green-700 text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300">
              <div className="text-4xl mb-4">🚀</div>

              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Full Stack
              </span>

              <h3 className="text-2xl font-bold mt-4 mb-3">
                MERN Stack Developer
              </h3>

              <p className="text-green-100 mb-6">
                Build scalable full-stack applications using MongoDB,
                Express, React and Node.js.
              </p>

              <button className="bg-white text-green-700 font-semibold px-5 py-2 rounded-xl" onClick={applyHandler}>
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-sky-700 py-20 relative overflow-hidden">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 text-white">

          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Join Our Team
          </span>

          <h2 className="text-5xl font-extrabold mb-6">
            Ready to Build Your Future?
          </h2>

          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Take the next step in your career. Submit your application today
            and become part of an innovative and growing team.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/applyjob"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition duration-300"
            >
              Apply Now →
            </Link>

            <Link
              to="/"
              className="border border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition duration-300"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>
    </div>
  );
}

export default Home;