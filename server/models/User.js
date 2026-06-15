import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {   
        id:{
            type:Number,
            required: true
        },
        name:{
            type:String,
            required: true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique : true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
        },
        phone:{
            type: Number,
            required: true
        },
        restaurantName:{
            type: String,
            required:  true,
            unique :true
        }

    }
)
const User = mongoose.model("User", userSchema);

export default User;