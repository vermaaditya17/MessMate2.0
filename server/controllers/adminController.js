import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

// ======================
// REGISTER ADMIN
// ======================

export const registerAdmin = async (req, res) => {
  try {
    const {
      restaurantName,
      ownerName,
      email,
      password,
      mobile,
    } = req.body;

    // Check existing admin
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin already exists with this email",
      });
  
    }

  

    // Create Admin
    const admin = await Admin.create({
      restaurantName,
      ownerName,
      email,
      password,
      mobile,
    });

    res.status(201).json({
      success: true,
      message: "Admin Registered Successfully",
      admin,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// LOGIN ADMIN
// ======================


export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Direct Password Compare
    if (password !== admin.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      admin: {
        _id: admin._id,
        restaurantName: admin.restaurantName,
        ownerName: admin.ownerName,
        email: admin.email,
        mobile: admin.mobile,
        qrCode: admin.qrCode,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};