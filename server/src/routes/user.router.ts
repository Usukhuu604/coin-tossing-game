import { Router } from "express";
import { getUserByIdController } from "../controller/get/get-user-id.controller.ts";
import { getAllUserNames } from "../controller/get/get-all-user-names.controller.ts";
import { deleteUserController } from "../controller/delete/delete-user.controller.ts";
import { createUserNameController } from "../controller/post/create-user-name.controller.ts";

export const userRouter = Router();

userRouter.get("/get-all-users", getAllUserNames);
userRouter.get("/get-user/:id", getUserByIdController);

userRouter.post("/create-user", createUserNameController);
userRouter.delete("/delete-user/:id", deleteUserController);
