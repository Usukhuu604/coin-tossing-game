import type { Request, Response } from "express";
import { UserModel } from "../../models/user.model.ts";

export const createUserNameController = async (req: Request, res: Response) => {
  const userName = req.body.userName;

  if (!userName) {
    return res.status(400).json({ message: "UserName is required" });
  }
  if (userName.trim() == "") {
    return res.status(400).json({ message: "UserName is required" });
  }
  const newUser = new UserModel({
    userName: userName,
  });

  const savedUser = await newUser.save();
  res.json(savedUser);
  return;
};
