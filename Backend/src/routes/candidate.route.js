import { Router } from "express";
import { createCandidate, getCandidateById, getAllCandidates, searchCandidates, shortlistCandidate, rejectCandidate } from "../controllers/candidate.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js"

const router = Router();

router.post("/apply",
upload.single("resume"),
createCandidate);

router.get("/getAllCandidates",
verifyJWT,
getAllCandidates);

router.get("/search", searchCandidates);

router.patch("/shortlist/:candidateId",
shortlistCandidate);

router.patch("/reject/:candidateId",
rejectCandidate);


router.get("/:candidateId", 
getCandidateById);

export default router;