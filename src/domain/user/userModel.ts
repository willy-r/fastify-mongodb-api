import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true },
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
