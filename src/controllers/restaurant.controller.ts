import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from '../models/Members.service';
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';



const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {

        console.log("Home Page")
        res.send("Home Page")

        // send | json | redirect | end | render

    } catch (err) {
        console.log("Error, goHome", err);

    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("Login Page")
        res.send("Login Page")

    } catch (err) {
        console.log("Error, Login", err);

    }
};
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("Signup Page")
        res.send("Signup Page")

    } catch (err) {
        console.log("Error, Signup", err);

    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("ProcessLogin")
        res.send("Done")


    } catch (err) {
        console.log("Error, ProcessLogin", err);

    }
};
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("ProcessSignup")
        console.log('body:', req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;


        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember)
        res.send(result)


    } catch (err) {
        console.log("Error, ProcessLogin", err);
        res.send(err)

    }
};

export default restaurantController