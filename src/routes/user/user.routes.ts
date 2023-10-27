import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  signUp,
  updateUser,
} from "../../controller/user/user.controller";

const userRoutes: Router = Router();

userRoutes
  .get("/", getAllUsers)
  .get("/:userId", getUserById)
  .put("/:email", updateUser)
  .delete("/:userId", deleteUser)
  .post("/", signUp);

export default userRoutes;
