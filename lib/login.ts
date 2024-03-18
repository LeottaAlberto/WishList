import { Prisma as PrismaSchema } from "@prisma/client";
import { Prisma } from "../src/db";
import jwt from "jsonwebtoken"

export async function login(user:{email: string, password: string}) {
    console.log('user is trying to login ');
    
    if(!(user?.email && user.password)) throw new Error("malformed request")
    
    const checkUser = await Prisma.user.findFirst({
        where:user
    })
    if(!checkUser) throw new Error('user ' + user.email+ ' not found')

    const token = jwt.sign({ _id: checkUser.id }, 'shhhhh');
    return token
}

export async function register(user:PrismaSchema.UserCreateArgs["data"]) {
    user.dateBirth=new Date(user.dateBirth)
    
    const checkUser = await Prisma.user.findFirst({
        where: user
    })
    if(checkUser) throw new Error('user ' + user.email+ ' already exist')

    const newUser = await Prisma.user.create({
        data: user
    });

    const token = jwt.sign({ _id: newUser.id }, 'shhhhh');
    return token
}

export async function editUser(id:string,user:PrismaSchema.UserUpdateInput) {
    const updatedUser = await Prisma.user.update({
        where: {
            id
        },
        data: user,
    });

    return updatedUser;

}