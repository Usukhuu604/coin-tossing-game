import { UserModel } from "../../models/user.model.ts";
import type { Request, Response } from "express";
export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "user does not exist" });
  try {
    const user = await UserModel.findById(id);

    if (!user) return res.json({ message: `cant find this user: ${user}` });

    res.json(user);
    return;
  } catch (err) {
    console.log("error occured ", err);
    process.exit(1);
  }
};
