import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    remark: {
      type: String,
    },

    tenthYear: {
      type: Number,
      required: true,
    },

    twelfthYear: {
      type: Number,
      required: true,
    },

    graduationDegree: {
      type: String,
      required: true,
    },

    graduationYear: {
      type: Number,
      required: true,
    },

    postGraduationDegree: {
      type: String,
    },

    postGraduationYear: {
      type: Number,
    },

    resume: {
     type: String,
     required:true
    },

    companyName: {
      type: String,
    },

    jobRole: {
      type: String,
    },

    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["Pending", "Shortlisted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Candidate =
  mongoose.model("Candidate", candidateSchema);