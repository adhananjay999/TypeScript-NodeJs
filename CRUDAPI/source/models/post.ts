import mongoose,{ Schema } from "mongoose";
import IPost from "../interfaces/post";

const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }//automatically maintain created/updated timestamps
);


export default mongoose.model<IPost>('Post',PostSchema);