import User from "../models/User.js";
import Post from "../models/Post.js";

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate("author", "username email");
    res.status(200).json(allPosts);
  } catch (e) {
    res.status(500).json({ message: "Server Error", errors: e.message });
  }
};

export default {
  getAllPosts,
};
