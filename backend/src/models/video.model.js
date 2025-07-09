import mongoose , {Schema} from "mongoose";

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    videoFile: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
})

videoSchema.plugin(require("mongoose-aggregate-paginate-v2"));

export const Video = mongoose.model("Video", videoSchema);