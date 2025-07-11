import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    coverImage:{
        type: String,
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video",
    }],
    password: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String,
    },

}, {
    timestamps: true,
})

userSchema.pre("save", async function (next){
    if(this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
})

userSchema.methods.isPasswordCorrect= async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jsonwebtoken.sign(
        { id: this._id, username: this.username, email: this.email, fullname: this.fullname  },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );

}
userSchema.methods.generateRefreshToken = function () {
    return jsonwebtoken.sign(
        { id: this._id, username: this.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
}

export const User = mongoose.model("User", userSchema);