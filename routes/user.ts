import {Router} from "express";
import UserController from "../controllers/UserController";
import {checkJwt} from "../middlewares/checkJwt";
import {checkRole} from "../middlewares/checkRole";

export const userRouter = Router();

// Get all users
userRouter.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

// Get one user
userRouter.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.getOneById,
);

// Create a new user
userRouter.post("/", UserController.newUser);

// Edit one user
userRouter.patch(
    "/",
    [checkJwt],
    UserController.editUser,
);

// Delete one user
userRouter.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.deleteUser,
);
