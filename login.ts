import { Prisma } from "./src/db";
import jwt from "jsonwebtoken"

async function login(email: string, password: string) {
    await Prisma.$connect();
    const checkUser = await Prisma.user.findFirst({
        where:{
            email,
            password,
        }
    })
    if(!checkUser) throw new Error('user ' + email+ ' not found')
    const token = jwt.sign({ _id: checkUser.id }, 'shhhhh');
    return token
}

async function register(email: string, username:string, password:string, dateBirth:Date, gender:string) {
    await Prisma.$connect();
    const newUser = await Prisma.user.create({
        data: {
            email:'2',
            username:'2',
            password:'2',
            dateBirth:new Date(),
            gender:'2'
        }
    });

    const token = jwt.sign({ _id: newUser.id }, 'shhhhh');
    return token
}

// let mail='pasticcio@ciao.it'
// let password='123prova'

// login(mail,password).catch((err) => {
//     console.error('Error: ', err);
//     process.exit(1);
// }).finally(async ()=>{
//     await Prisma.$disconnect();
// });

let mail ="luigiLeotta@pasticcino.asd"
let username='pasti'
let password='lulepast'
let dateBirth= new Date()
let gender='non-binary'

register(mail,username,password,dateBirth,gender).catch((err) => {
    console.error('Error: ', err);
    process.exit(1);
}).finally(async ()=>{
    await Prisma.$disconnect();
});