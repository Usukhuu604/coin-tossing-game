import type { Request, Response } from "express";
import { UserModel } from "../../models/user.model.ts";

export const getAllUserNames = async (req: Request, res: Response) => {
  const userNames = await UserModel.find({});
  res.json(userNames);
  return;
};
