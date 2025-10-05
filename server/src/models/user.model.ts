import mongoose from "mongoose";
const { Schema, model, models, Model } = mongoose;

type UserType = {
  userName: string;
  initialValue?: number;
  change?: number;
};

const UserSchema = new Schema<UserType>(
  {
    userName: { type: String, required: true, trim: true },
    initialValue: { type: Number, required: false, min: 1, default: 1 },
    change: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const UserModel: typeof Model<UserType> =
  models["User"] || model("User", UserSchema, "flip coin game");
