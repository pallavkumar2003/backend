import asyncHandler from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"


const registerUser = asyncHandler(async (req, res) => {
    //get user details from frontend
    //validation-not-empty
    //check if user already exists
    //check for images
    //upload them to cloudnary
    //create user in database
    //remove password and refresh token from response
    //check for user creation
    //send response

    const { fullname, email, username, password } = req.body;
    console.log(req.body);

    if ([fullname, email, username, password].some(field => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        throw new ApiError(400, "User already exists");
    }
})

export { registerUser }