import IPost from "../interfaces/post";
import Post from "../models/post";

export class PostsService {
  constructor() {}

  static async createPost(content: { title: String; body: String }) {
    const post = new Post(content);
    let result = await post.save();
    return result;
  }
  static async getAllPosts() {
    let result = await Post.find().exec();
    return result;
  }
  static async getSpecificPost(postId: String) {
    let result = await Post.findById(postId);
    return result;
  }
  static async updateSpecificPost(
    id: String,
    content: { title: String; body: String }
  ) {
    let options = { new: true };
    let result = await Post.findByIdAndUpdate(id, content, options);
    return result;
  }
  static async deleteSpecificPost(id: String) {
    let result = await Post.findByIdAndDelete(id);
    return result;
  }
}
