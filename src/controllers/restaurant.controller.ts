import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from '../models/Members.service';

MemberService


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
restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("ProcessSignup")
        res.send("Done")
     

    } catch (err) {
        console.log("Error, ProcessLogin", err);

    }
};

export default restaurantController