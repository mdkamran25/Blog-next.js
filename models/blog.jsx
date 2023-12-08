import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    writerName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
}, {
    timestamps: true,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
