"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../lib/db");
async function test() {
    await db_1.Prisma.$connect();
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
