import { Prisma as PrismaSchema } from "@prisma/client";
import { Prisma } from "./db";
import jwt from "jsonwebtoken"
import { CONST_VALUES } from "../config";

import bcrypt from 'bcrypt';
import { TCreateUser } from "../interfaces";
const saltRounds = 10;

export async function login(user:{email: string, password: string}) {
    console.log('user is trying to login ');
    
    if(!(user?.email && user.password)) throw new Error("malformed request")

    const checkUser = await Prisma.user.findFirst({
        where:{
            email:user.email
        }
    })

    if(!checkUser) return new Error('invalid email')
    const match = await bcrypt.compare(user.password, checkUser.password)

    if(!match)
        return new Error('invalid password')

    if(!checkUser) 
        throw new Error('user ' + user.email+ ' not found')

    const id = checkUser.id;
    const token = jwt.sign({ _id: checkUser.id }, CONST_VALUES.jwt_secret);
    return {id, token}
}

export async function register(user: TCreateUser) {
    console.log('user is trying to register ');
    user.dateBirth=new Date(user.dateBirth)
    
    const checkUser = await Prisma.user.findFirst({
        where:{
            email:user.email
        }
    })

    if(checkUser) throw new Error('user ' + user.email+ ' already exist')

    const cryptedpassword= await bcrypt.hash(user.password, saltRounds)

    user.password=cryptedpassword
    const newUser = await Prisma.user.create({
        data: user
    });

    const token = jwt.sign({ _id: newUser.id }, CONST_VALUES.jwt_secret,{expiresIn:'365d'});
    return token
}

export async function editUser(id:string, user:Omit<TCreateUser,"password">) {
    const updatedUser = await Prisma.user.update({
        where: {
            id
        },
        data: user,
    });

    return updatedUser;

}

