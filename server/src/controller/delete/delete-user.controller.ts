import type { Request, Response } from "express";
import { UserModel } from "../../models/user.model.ts";

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "invalid id" });

  try {
    const user = await UserModel.findByIdAndDelete(id);

    if (!user) return res.status(400).json({ message: "can find the user" });

    res.json({ message: `user ${user.userName} has deleted` });

    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });

    return;
  }
};
