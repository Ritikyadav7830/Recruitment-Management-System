import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import axios from "axios";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [totalApplications, setTotalApplications] = useState(0);
  const [pendingReview, setPendingReview] = useState(0);
  const [shortlisted, setShortlisted] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();

  const handleShortlist = async (id) => {

  try {

    const response = await axios.patch(
      `${API_URL}/api/v1/candidates/shortlist/${id}`
    );

    // console.log(response.data);

    fetchCandidates();

  } catch (error) {

    console.log(error);

  }

  };

  const handleReject = async (id) => {

  try {

    const response = await axios.patch(
      `${API_URL}/api/v1/candidates/reject/${id}`
    );

    // console.log(response.data);

    fetchCandidates();

  } catch (error) {

    console.log(error);

  }

  };

  const handleDownloadResume = (resumeUrl) => {
  window.open(resumeUrl, "_blank");
  };

  const fetchCandidates = async () => {
 
  const response = await axios.get(
  `${API_URL}/api/v1/candidates/getAllCandidates?page=${page}&limit=5`,
  {
   withCredentials: true,
  } 
  )

  // console.log(response.data)
  setCandidates(response.data.candidates)
  setTotalApplications(response.data.totalApplications)
  setTotalPages(response.data.totalPages);
  setPendingReview(response.data.pendingReview)
  setShortlisted(response.data.shortlisted)
  }

  const handleSearch = async ()=>{
    try {
        const response = await axios.get(
        `${API_URL}/api/v1/candidates/search?page=${page}&limit=5&search=${search}`,
         {
          withCredentials: true,
         } 
  )
  //  console.log(response.data)
  setCandidates(response.data.candidates)
  setTotalApplications(response.data.totalApplications)
  setTotalPages(response.data.totalPages);
  setPendingReview(response.data.pendingReview)
  setShortlisted(response.data.shortlisted)
    } catch (error) {
      console.log(error)
    }
  }

  const handleReset = () => {
  setSearch("");
  setIsSearching(false);
  setPage(1);
  };

  useEffect(() => {
    if (search.trim()) {
      handleSearch();
    } else {
      fetchCandidates();
    }
  }, [page, search]);

  
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">

        <div>
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium mb-3">
            🚀 Recruitment Dashboard
          </div>

          <h1 className="text-4xl font-extrabold text-slate-800">
            Admin Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Manage applications, review candidates, and track recruitment progress.
          </p>
        </div>

      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        {/* Total Applications */}
        <div className="bg-gradient-to-br from-sky-500 to-blue-700 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition duration-300">

          <div className="flex justify-between items-center">
            <h3 className="text-sky-100 font-medium">
              Total Applications
            </h3>

            <span className="text-3xl">📄</span>
          </div>

          <p className="text-4xl font-bold mt-4">
            {totalApplications}
          </p>

        </div>

        {/* Shortlisted */}
        <div className="bg-gradient-to-br from-emerald-500 to-green-700 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition duration-300">

          <div className="flex justify-between items-center">
            <h3 className="text-green-100 font-medium">
              Shortlisted
            </h3>

            <span className="text-3xl">✅</span>
          </div>

          <p className="text-4xl font-bold mt-4">
            {shortlisted}
          </p>

        </div>

        {/* Pending Review */}
        <div className="bg-gradient-to-br from-amber-400 to-orange-600 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition duration-300">

          <div className="flex justify-between items-center">
            <h3 className="text-yellow-100 font-medium">
              Pending Review
            </h3>

            <span className="text-3xl">⏳</span>
          </div>

          <p className="text-4xl font-bold mt-4">
            {pendingReview}
          </p>

        </div>

      </div>

      {/* Search */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-slate-200">

        <div className="flex flex-col md:flex-row gap-3">

          <input
            type="text"
            placeholder="🔍 Search candidates by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            flex-1
            border
            border-slate-300
            rounded-xl
            p-3
            outline-none
            focus:ring-4
            focus:ring-sky-200
            focus:border-sky-500
            "
          />

          <button
            onClick={handleReset}
            className="
            bg-slate-200
            text-slate-700
            px-6
            py-3
            rounded-xl
            font-semibold
            hover:bg-slate-300
            transition
            "
          >
            Reset
          </button>

        </div>

      </div>

      {/* Candidate Table */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">

        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center">

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Candidate Applications
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Manage and review all candidate applications
            </p>
          </div>

          <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
            {totalApplications} Candidates
          </span>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="p-4 text-left">Candidate</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>

              {candidates.length === 0 ? (

                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-10 text-slate-500 text-lg"
                  >
                    🔍 No candidates found
                  </td>
                </tr>

              ) : (

                candidates.map((candidate) => (

                  <tr
                    key={candidate._id}
                    className="border-b hover:bg-sky-50 transition duration-200"
                  >

                    {/* Candidate */}
                    <td className="p-4">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                          {candidate.fullName
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>

                        <span className="font-medium text-slate-700">
                          {candidate.fullName}
                        </span>

                      </div>

                    </td>

                    {/* Email */}
                    <td className="p-4 text-slate-600">
                      {candidate.email}
                    </td>

                    {/* Status */}
                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          candidate.status === "Shortlisted"
                            ? "bg-green-100 text-green-700"
                            : candidate.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {candidate.status}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="p-4">

                      <div className="flex flex-wrap gap-2">

                        <button
                          onClick={() =>
                            navigate(`/candidate/${candidate._id}`)
                          }
                          className="
                          bg-sky-500
                          hover:bg-sky-600
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          text-sm
                          font-medium
                          transition
                          "
                        >
                          👁 View
                        </button>

                        <button
                          onClick={() =>
                            handleDownloadResume(candidate.resume)
                          }
                          className="
                          bg-green-500
                          hover:bg-green-600
                          text-white
                          px-4
                          py-2
                          rounded-lg
                          text-sm
                          font-medium
                          transition
                          "
                        >
                          📄 Resume
                        </button>

                        <button
                          disabled={
                            candidate.status !== "Pending"
                          }
                          onClick={() =>
                            handleShortlist(candidate._id)
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition ${
                            candidate.status !== "Pending"
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-purple-500 hover:bg-purple-600"
                          }`}
                        >
                          ✅ Shortlist
                        </button>

                        <button
                          disabled={
                            candidate.status !== "Pending"
                          }
                          onClick={() =>
                            handleReject(candidate._id)
                          }
                          className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition ${
                            candidate.status !== "Pending"
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-red-500 hover:bg-red-600"
                          }`}
                        >
                          ❌ Reject
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      <div className="flex justify-center items-center gap-2 mt-8">

        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-2 rounded-xl font-medium transition ${
            page === 1
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
        >
          ← Prev
        </button>

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        )
          .filter(
            (pageNumber) =>
              pageNumber === 1 ||
              pageNumber === totalPages ||
              Math.abs(pageNumber - page) <= 1
          )
          .map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`w-10 h-10 rounded-xl font-semibold transition ${
                page === pageNumber
                  ? "bg-sky-500 text-white shadow-lg"
                  : "bg-white border border-slate-300 hover:bg-slate-100"
              }`}
            >
              {pageNumber}
            </button>
          ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-2 rounded-xl font-medium transition ${
            page === totalPages
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
        >
          Next →
        </button>

      </div>

    </div>
  );
}

export default Dashboard;