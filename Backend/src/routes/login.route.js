import { Router } from "express";
import { createAdmin, getCurrentAdmin, adminLogin, logoutAdmin } from "../controllers/login.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js"


const router = Router();
router.post("/create-admin", createAdmin );
router.get("/current-admin",verifyJWT, getCurrentAdmin );
router.post("/login", adminLogin );
router.post("/logout",verifyJWT, logoutAdmin );


export default router;