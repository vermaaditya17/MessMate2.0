import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  try {

    const {
      id,
      name,
      email,
      password,
      phone,
      restaurantName
    } = req.body;

    // Check Email
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    // Check Restaurant Name
    const existingRestaurant = await User.findOne({
      restaurantName
    });

    if (existingRestaurant) {
      return res.status(400).json({
        success: false,
        message: "Restaurant already exists"
      });
    }

   
    // Create User
    const user = await User.create({
      id,
      name,
      email,
      password,
      phone,
      restaurantName
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// Login User
export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Direct Password Compare
    if (password !== user.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      {
        userId: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        _id: user._id,
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        restaurantName: user.restaurantName
      }
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};