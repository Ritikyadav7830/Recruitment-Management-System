import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.model.js";


const createAdmin = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const existingAdmin = await Admin.findOne({
       email: email.trim().toLowerCase(),
    });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Admin Created Successfully",
      admin,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getCurrentAdmin = async (req, res) => {
  try {

    const admin = await Admin.findById(
      req.admin._id
    ).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    return res.status(200).json({
      success: true,
      admin,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
     return res.status(400).json({
     success: false,
     message: "Email and Password are required",
     });
    }

    const admin = await Admin.findOne({
       email: email.trim().toLowerCase(),
    });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Admin not found",
      });
    }

    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        _id: admin._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
      }
    );

    const adminWithoutPassword =
  await Admin.findById(admin._id)
    .select("-password");

    return res
    .status(200)
    .cookie("accessToken", token, {
    httpOnly: true,
    secure: false, // localhost ke liye
    sameSite: "lax",
  })
    .json({
      success: true,
      message: "Login Successful",
      admin: adminWithoutPassword
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

const logoutAdmin = (req, res) => {

  return res
    .clearCookie("accessToken")
    .status(200)
    .json({
      success: true,
      message: "Logged Out",
    });
};


export { createAdmin,
         getCurrentAdmin,
         adminLogin,
         logoutAdmin 
        };