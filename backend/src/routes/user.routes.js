import {Router} from "express";
import { registerUser,login,logout,allUserExceptOnline,getOnlineUser} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router=Router()
router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/allUserExceptOnline").get(verifyJWT,allUserExceptOnline);
router.route("/getOnlineUser").get(verifyJWT,getOnlineUser);

export default router;