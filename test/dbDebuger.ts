import { editUser, register } from "../lib/login"
import { Prisma } from "../src/db"

async function test() {
    await Prisma.$connect();

    // editUser().catch((err) => {
    //         console.error('Error: ', err);
    //         process.exit(1);
    //     }).finally(async ()=>{
    //         await Prisma.$disconnect();
    // });


    //registration simulation
    // register(mail,username,password,dateBirth,gender).catch((err) => {
    //     console.error('Error: ', err);
    //     process.exit(1);
    // }).finally(async ()=>{
    //     await Prisma.$disconnect();
    // });

    // login simulation

    // login(mail,password).catch((err) => {
    //     console.error('Error: ', err);
    //     process.exit(1);
    // }).finally(async ()=>{
    //     await Prisma.$disconnect();
    // });

}

