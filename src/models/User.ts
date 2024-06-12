import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  createdAt: Date;
  content: string;
}
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: Boolean;
  isAccepting: Boolean;
  messages: Message[];
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is  required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, "Please input valid email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifyCode: {
      type: String,
      trim: true,
    },
    verifyCodeExpiry: {
      type: Date,
      trim: true,
    },
    isAccepting: {
      type: Boolean,

      default: true,
    },
    messages: [MessageSchema],
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
