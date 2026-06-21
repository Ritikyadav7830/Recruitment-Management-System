import { useState } from "react";
import axios from "axios"


function ApplyJob() {

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phoneNumber: "",
  remark: "",

  tenthYear: "",
  twelfthYear: "",

  graduationDegree: "",
  graduationYear: "",

  postGraduationDegree: "",
  postGraduationYear: "",

  resume: null,

  companyName: "",
  jobRole: "",

  startDate: "",
  endDate: ""
   });

  const [submitSuccess, setSubmitSuccess] =useState("");
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
   };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("remark", formData.remark);

      data.append("tenthYear", formData.tenthYear);
      data.append("twelfthYear", formData.twelfthYear);

      data.append(
        "graduationDegree",
        formData.graduationDegree
      );

      data.append(
        "graduationYear",
        formData.graduationYear
      );

      data.append(
        "postGraduationDegree",
        formData.postGraduationDegree
      );

      data.append(
        "postGraduationYear",
        formData.postGraduationYear
      );

      data.append("resume", formData.resume);

      data.append(
        "companyName",
        formData.companyName
      );

      data.append(
        "jobRole",
        formData.jobRole
      );

      data.append(
        "startDate",
        formData.startDate
      );

      data.append(
        "endDate",
        formData.endDate
      );

      const response = await axios.post(
        "http://localhost:8000/api/v1/candidates/apply",
        data,
           {
      withCredentials: true,
     }
      );

      // console.log(response.data);

      setSubmitSuccess("Application Submitted Successfully")

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        remark: "",

        tenthYear: "",
        twelfthYear: "",

        graduationDegree: "",
        graduationYear: "",

        postGraduationDegree: "",
        postGraduationYear: "",

        resume:null,

        companyName: "",
        jobRole: "",

        startDate: "",
        endDate: "",
      });

    } catch (error) {
      console.log(error);
      setSubmitSuccess("");
      setSubmitError(
         error?.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
         setLoading(false);
         setTimeout(() => {
                       setSubmitSuccess("");
                       setSubmitError("")
                      }, 4000);
             }
  };


  return (
    <div className="max-w-5xl mx-auto my-10 bg-white shadow-lg rounded-xl p-8">

      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-8 mb-10">

        <div>
          <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
            🚀 Career Portal
          </span>

          <h2 className="text-4xl font-extrabold text-slate-800">
            Job Application Form
          </h2>

          <p className="text-slate-500 mt-2">
            Complete your profile and submit your application.
          </p>
        </div>

        <img
          src="/Recruitment-Management-System-logo.jpg"
          alt="RMS Logo"
          className="h-16 w-auto rounded-xl shadow-md"
        />

      </div>

      <form className="space-y-10"  onSubmit={handleSubmit}>

        {/* Personal Details */}
        <section className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">

          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            👤 Personal Details
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Phone Number
              </label>

              <input
                type="number"
                name="phoneNumber"
                required
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-slate-700">
                Remark
              </label>

              <textarea
                rows="4"
                name="remark"
                value={formData.remark}
                onChange={handleChange}
                placeholder="Tell us something about yourself..."
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

          </div>

        </section>

        {/* Education */}
        <section className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">

          <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            🎓 Education Details
          </h3>
          <p className="text-slate-500 mb-8">
          Provide your academic qualifications and graduation details.
        </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                10th Passing Year
              </label>

              <select
                name="tenthYear"
                required
                value={formData.tenthYear}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              >
                <option value="">Select Year</option>

                {Array.from(
                  { length: 30 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                12th Passing Year
              </label>

              <select
                name="twelfthYear"
                required
                value={formData.twelfthYear}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              >
                <option value="">Select Year</option>

                {Array.from(
                  { length: 30 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Graduation Degree
              </label>

              <input
                type="text"
                required
                name="graduationDegree"
                value={formData.graduationDegree}
                onChange={handleChange}
                placeholder="B.Tech, B.Sc, BCA"
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Graduation Year
              </label>

              <select
                name="graduationYear"
                required
                value={formData.graduationYear}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              >
                <option value="">Select Year</option>

                {Array.from(
                  { length: 30 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Post Graduation Degree
              </label>

              <input
                type="text"
                name="postGraduationDegree"
                value={formData.postGraduationDegree}
                onChange={handleChange}
                placeholder="MBA, M.Tech, MCA"
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Post Graduation Year
              </label>

              <select
                name="postGraduationYear"
                value={formData.postGraduationYear}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              >
                <option value="">Select Year</option>

                {Array.from(
                  { length: 30 },
                  (_, i) => new Date().getFullYear() - i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

          </div>

        </section>
        
        {/* Resume upload */}
        <section className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">

          <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            📄 Resume Upload
          </h3>

          <p className="text-slate-500 mb-8">
            Upload your latest resume in PDF format.
          </p>

          <label
            htmlFor="resume"
            className="
            border-2
            border-dashed
            border-sky-300
            rounded-3xl
            p-10
            flex
            flex-col
            items-center
            justify-center
            cursor-pointer
            bg-sky-50
            hover:bg-sky-100
            hover:border-sky-500
            transition
            duration-300
            "
          >
            <div className="bg-white p-2 rounded-full shadow-md mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-sky-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            <p className="font-semibold text-slate-700 text-lg">
              Click to Upload Resume
            </p>

            <p className="text-sm text-slate-500 mt-2">
              PDF only • Maximum file size 5 MB
            </p>

            <input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf"
              className="hidden"
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  resume: e.target.files[0],
                })
              }
            />
          </label>

          {formData.resume && (
            <div className="mt-5 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">

              <span className="text-2xl">✅</span>

              <div>
                <p className="font-semibold text-green-700">
                  Resume Uploaded Successfully
                </p>

                <p className="text-green-600 text-sm">
                  {formData.resume.name}
                </p>
              </div>

            </div>
          )}

        </section>

        {/* Employment History */}
        <section className="bg-slate-50 rounded-3xl p-8 shadow-sm border border-slate-200">

          <h3 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-3">
            💼 Employment History
          </h3>

          <p className="text-slate-500 mb-8">
            Provide details about your previous work experience (optional).
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Company Name
              </label>

              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Google, Microsoft, TCS..."
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Job Role
              </label>

              <input
                type="text"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                placeholder="Frontend Developer"
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-slate-700">
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="
                w-full
                border
                border-slate-300
                rounded-xl
                p-3
                outline-none
                transition
                focus:ring-4
                focus:ring-sky-200
                focus:border-sky-500
                "
              />
            </div>

          </div>

        </section>

        {/* Submit Button */}
        <div className="flex flex-col items-center mt-10">
          
         {
          submitSuccess && (
            <div className="mb-6 flex justify-center">
              <div className="bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-xl shadow-sm font-medium">
               🎉 {submitSuccess}
              </div>
            </div>
          )
        }

        {
          submitError && (
            <div className="mb-6 flex justify-center">
              <div className="bg-red-100 border border-red-300 text-red-700 px-6 py-3 rounded-xl shadow-sm font-medium">
                ❌ {submitError}
              </div>
            </div>
          )
        }

        <button
          type="submit"
          disabled={loading}
          className="
          bg-gradient-to-r
          from-sky-500
          via-blue-600
          to-indigo-700
          text-white
          px-12
          py-4
          rounded-2xl
          font-bold
          text-lg
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-1
          transition
          duration-300
          disabled:opacity-70
          disabled:cursor-not-allowed
          disabled:hover:translate-y-0
          "
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>

              Submitting...
            </span>
          ) : (
            "🚀 Submit Application"
          )}
        </button>

          <p className="text-sm text-slate-500 mt-3">
            Your application will be reviewed by our recruitment team.
          </p>

        </div>

      </form>
    </div>
  );
}

export default ApplyJob;