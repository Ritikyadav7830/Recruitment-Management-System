import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function CandidateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/candidates/${id}`
        );

        setCandidate(response.data.candidate);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidate();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!candidate) {
    return (
      <div className="text-center mt-10">
        <h1>Candidate Not Found</h1>
      </div>
    );
  }

return (
  <div className="min-h-screen bg-slate-100 py-10 px-4">

    <div className="max-w-6xl mx-auto">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 text-white shadow-lg mb-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h1 className="text-4xl font-bold">
              {candidate.fullName}
            </h1>

            <p className="mt-2 text-sky-100">
              {candidate.email}
            </p>

            <p className="mt-1 text-sky-100">
              {candidate.phoneNumber}
            </p>
          </div>

          <div className="flex gap-3">

            <span
              className={`px-4 py-2 rounded-full font-medium ${
                candidate.status === "Shortlisted"
                  ? "bg-green-500"
                  : candidate.status === "Rejected"
                  ? "bg-red-500"
                  : "bg-yellow-400 text-black"
              }`}
            >
              {candidate.status}
            </span>

            <button
              onClick={() => navigate("/dashboard")}
              className="bg-white text-slate-800 px-4 py-2 rounded-xl font-medium hover:bg-slate-100"
            >
              Back
            </button>

          </div>

        </div>

      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Full Name</p>
            <p className="font-semibold text-slate-800">
              {candidate.fullName}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Email Address</p>
            <p className="font-semibold text-slate-800">
              {candidate.email}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Phone Number</p>
            <p className="font-semibold text-slate-800">
              {candidate.phoneNumber}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Applied On</p>
            <p className="font-semibold text-slate-800">
              {new Date(candidate.createdAt).toLocaleDateString()}
            </p>
          </div>

        </div>

      </div>

      {/* Education */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">10th Passing Year</p>
            <p className="font-semibold">{candidate.tenthYear}</p>
          </div>

          <div>
            <p className="text-gray-500">12th Passing Year</p>
            <p className="font-semibold">{candidate.twelfthYear}</p>
          </div>

          <div>
            <p className="text-gray-500">Graduation Degree</p>
            <p className="font-semibold">
              {candidate.graduationDegree}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Graduation Year</p>
            <p className="font-semibold">
              {candidate.graduationYear}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Post Graduation Degree
            </p>
            <p className="font-semibold">
              {candidate.postGraduationDegree || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">
              Post Graduation Year
            </p>
            <p className="font-semibold">
              {candidate.postGraduationYear || "N/A"}
            </p>
          </div>

        </div>

      </div>

      {/* Employment History */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Employment History
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Company Name</p>
            <p className="font-semibold">
              {candidate.companyName || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Job Role</p>
            <p className="font-semibold">
              {candidate.jobRole || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Start Date</p>
            <p className="font-semibold">
              {candidate.startDate
                ? new Date(
                    candidate.startDate
                  ).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">End Date</p>
            <p className="font-semibold">
              {candidate.endDate
                ? new Date(
                    candidate.endDate
                  ).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

        </div>

      </div>

      {/* Remarks */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Remarks
        </h2>

        <div className="bg-slate-50 border rounded-xl p-4 text-slate-700">
          {candidate.remark || "No Remarks Added"}
        </div>

      </div>

    </div>

  </div>
);
}

export default CandidateDetails;