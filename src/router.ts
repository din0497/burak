import express from 'express';
const router = express.Router();
import memberController from './controllers/member.controller';

const {goHome, getLogin, getSignup} = memberController;



router.get("/", goHome)


router.get("/login", getLogin)

router.get("/signup", getSignup)

export default router