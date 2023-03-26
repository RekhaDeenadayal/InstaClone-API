const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: String,
    location: String,
    likes: Number,
    description: String,
    postImage: String,
    date: Date
})

const Post = mongoose.model('posts', postSchema); 

module.exports = Post
