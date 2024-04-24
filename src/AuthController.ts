import { Body, Controller, Patch, Post, Route } from "tsoa";
import { Prisma as PrismaSchema } from "@prisma/client";
import { login } from "../lib/login";
import { CONST_VALUES } from "../config";
import { Prisma } from "../lib/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { TCreateUser } from "../interfaces";
const saltRounds = 10;

@Route("auth")
export class AuthController extends Controller {

    @Post("login")
    public async loginUser(@Body() body: { email: string; password: string; } ) {
        
        try {
            const token = await login(body)
            return {token}
        } catch (err) {
            this.setStatus(403)
            return {
                error:"username or password are incorecct!"
            }
        }
    }

    @Post("register")
    public async registerUser(@Body() body: TCreateUser ) {
        console.log(body);
        body.dateBirth = new Date(body.dateBirth)
    
        
        
        const checkUser = await Prisma.user.findFirst({
            where:{
                email:body.email
            }
        })
        
        if(checkUser) throw new Error('user ' + body.email+ ' already exist')
        
        const cryptedpassword = await bcrypt.hash(body.password, saltRounds)
        
        body.password=cryptedpassword
        const newUser = await Prisma.user.create({
            data: body
        });

        const id = newUser.id;
        
        const token = jwt.sign({ _id: newUser.id }, CONST_VALUES.jwt_secret,{expiresIn:'365d'});
        return {id, token}
    }

}