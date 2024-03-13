import { Prisma } from "./src/db";

async function login(mail: string, password: string) {
    await Prisma.$connect();
    const checkUser = await Prisma.user.findFirst({
        where:{
            email: mail,
            password: password,
        }
    })
    console.log(checkUser);
    
}

let mail='pasticcio@ciao.it'
let password='123prova'

login(mail,password).catch((err) => {
    console.error('Error: ', err);
    process.exit(1);
}).finally(async ()=>{
    await Prisma.$disconnect();
});