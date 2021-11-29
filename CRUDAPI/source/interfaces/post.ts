import { Document } from "mongoose";
export default interface IPost extends Document{
    title: String;
    body: String;
}