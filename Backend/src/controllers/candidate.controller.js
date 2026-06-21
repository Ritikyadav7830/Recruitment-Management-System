import { Candidate } from "../models/candidate.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";


const createCandidate = async (req, res) => {
  try {

    const resumeLocalPath = req.file?.path;

    if (!resumeLocalPath) {
      return res.status(400).json({
        success: false,
        message: "Resume is required"
      });
    }

    const resume = await uploadOnCloudinary(
      resumeLocalPath
    );

    if (!resume) {
      return res.status(400).json({
        success: false,
        message: "Resume upload failed"
      });
    }

    const candidate = await Candidate.create({
      ...req.body,
      resume: resume.secure_url,
    });

    return res.status(201).json({
      success: true,
      message: "Candidate Created Successfully",
      candidate
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getCandidateById = async (req, res) => {
  const { candidateId } = req.params;

  const candidate =
    await Candidate.findById(candidateId);

  if (!candidate) {
    return res.status(404).json({
      success: false,
      message: "Candidate not found"
    });
  }

  return res.status(200).json({
    success: true,
    candidate
  });
};

const getAllCandidates = async(req ,res)=>{
    try {

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip =(page - 1) * limit

    const candidates = await Candidate
    .find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
    

    const totalApplications = await Candidate
    .countDocuments();

    const totalPages =Math.ceil( totalApplications / limit)

    const pendingReview = await Candidate
    .countDocuments({
     status: "Pending"
     });

    const shortlisted = await Candidate
    .countDocuments({
    status: "Shortlisted"
    });

    return res.status(200).json({
      success: true,
      message: "Candidate fetch Successfully",
      candidates,
      totalApplications,
      totalPages,
      pendingReview,
      shortlisted,
    });

  } catch(error){
    console.log(error)
     return res.status(500).json({
     success: false,
     message: error.message
    });
  }
}

const searchCandidates = async (req, res) => {

   const search = req.query.search;

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const totalApplications = await Candidate.countDocuments({
        fullName: {
            $regex: search,
            $options: "i"
        }
    });

    const totalPages = Math.ceil(
        totalApplications / limit
    );

    const candidates = await Candidate.find({
        fullName: {
            $regex: search,
            $options: "i"
        }
    })
        .skip(skip)
        .limit(limit);

    const pendingReview =
      await Candidate.countDocuments({
        fullName: {
          $regex: search,
          $options: "i"
        },
        status: "Pending"
      });

    const shortlisted =
      await Candidate.countDocuments({
        fullName: {
          $regex: search,
          $options: "i"
        },
        status: "Shortlisted"
      });    

    return res.status(200).json(
            {
              success: true,
              message:"Search Candidates fetched successfully",
              candidates,
              totalPages,
              totalApplications,
              pendingReview,
              shortlisted
            }
          )
};

const shortlistCandidate = async (req, res) => {
  try {

    const { candidateId } = req.params;
    
    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found",
      });
    }

    if (candidate.status !== "Pending") {
      return res.status(400).json({
      success: false,
      message: "Candidate status already updated"
    });
   }

    const updatedCandidate  = await Candidate.findByIdAndUpdate(
      candidateId,
      {
        status: "Shortlisted",
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Candidate shortlisted successfully",
      updatedCandidate,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const rejectCandidate = async (req, res) => {
  try {

    const { candidateId } = req.params;

    const candidate = await Candidate.findById(candidateId);

    if (!candidate) {
      return res.status(404).json({
        success: false,
        message: "Candidate not found",
      });
    }

    if (candidate.status !== "Pending") {
    return res.status(400).json({
    success: false,
    message: "Candidate status already updated"
    });
    }

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      candidateId,
      {
        status: "Rejected",
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Candidate Rejected successfully",
      updatedCandidate,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export { createCandidate,
         getCandidateById,
         getAllCandidates,
         searchCandidates,
         shortlistCandidate,
         rejectCandidate
 };