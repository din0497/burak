import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';


/* Member */

router.post("/member/login", memberController.login)
router.post("/member/logout", 
    memberController.verifyAuth, 
    memberController.logout)
router.post('/member/signup', memberController.signup)
router.get("/member/detail", 
    memberController.verifyAuth, 
    memberController.getMemberDetail)


/* Product */


/* Orders */


export default router