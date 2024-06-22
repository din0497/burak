import { NextFunction, Request, Response } from 'express';
import { T } from "../libs/types/common";
import MemberService from '../models/Members.service';
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/types/enums/member.enum';
import { Message } from '../libs/Errors';


const memberService = new MemberService();
const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {

        console.log("Home Page")
        res.render('home')

        // send | json | redirect | end | render

    } catch (err) {
        console.log("Error, goHome", err);
        res.redirect('/admin')

    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("Login Page")
        res.render("login")

    } catch (err) {
        console.log("Error, Login", err);
        res.redirect('/admin')

    }
};
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("Signup Page")

        res.render("signup")

    } catch (err) {
        console.log("Error, Signup", err);
        res.redirect('/admin')

    }
};


restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("ProcessSignup")

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember)

        //TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(() => {
            res.send(result)
        })



    } catch (err) {
        console.log("Error, ProcessLogin", err);
        const message = err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert(${message}); window.location.replace('admin/signup')</script>`)

    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("ProcessLogin")
        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input)
        //TODO: SESSION AUTH

        req.session.member = result;
        req.session.save(() => {

            res.send(result);
        });

    } catch (err) {
        console.log("Error, ProcessLogin", err);
        const message = err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script>alert(${message}); window.location.replace('admin/signup')</script>`)

    }

};
restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout")
        req.session.destroy(function () {
            res.redirect('/admin')
        })

    } catch (err) {
        console.log("Error, ProcessLogin", err);
        res.redirect('/admin')

    }

};


restaurantController.checkoutSession = async (
    req: AdminRequest,
    res: Response) => {
    try {
        console.log("Check")
        if (req.session?.member) res.send(`<script>alert(${req.session.member.memberNick})</script>`)

        else res.send(`<script>alert(${Message.NOT_AUTHENTICTED})</script>`)

    } catch (err) {
        console.log("Error, Check Auth", err);
        res.send(err)

    }
};

restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
) => {

    if (req.session?.member?.memberType === MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICTED
        res.send(`<script>alert('${message}'); window.location.replace('/admin/login')</script>`)

    }

}




export default restaurantController