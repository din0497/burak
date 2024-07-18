import { Request, Response } from 'express';
import { T } from "../libs/types/common";
import { MemberType } from '../libs/enums/member.enum';
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import MemberService from '../models/Members.service';
import Errors, { HttpCode } from '../libs/Errors';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../libs/config';


const memberService = new MemberService()
const authService = new AuthService()

const memberController: T = {}

//REACT



memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("Signup")

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input),
            token = await authService.createToken(result)
        // TODO: Tokens
        res.cookie('accessToken', token, { maxAge: AUTH_TIMER * 3600 * 1000, httpOnly: false })


        res.status(HttpCode.CREATED).json({ member: result, accessToken: token })


    } catch (err) {
        console.log("Error, signup", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)


    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("Login")
        const input: LoginInput = req.body,
            result = await memberService.login(input),
            token = await authService.createToken(result)


        // TODO: Tokens
        res.cookie('accessToken', token, { maxAge: AUTH_TIMER * 3600 * 1000, httpOnly: false })


        res.status(HttpCode.OK).json({ member: result, accessToken: token })
    } catch (err) {
        console.log("Error, login", err);
        if (err instanceof Errors) res.status(err.code).json(err)
        else res.status(Errors.standard.code).json(Errors.standard)

    }
};

export default memberController
