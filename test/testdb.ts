import { Prisma } from "../src/db";

async function test() {
    await Prisma.$connect();
    const ciao = await Prisma.user.create({
        data: {
            username: 'Pasticcio',
            password: '123prova',
            email: 'pasticcio@ciao.it',
            dateBirth: new Date(),
            gender:"male"
        }
    });
    console.log(ciao);
}

test().catch((err) => {
    console.error('Error: ', err);
    process.exit(1);
}).finally(async ()=>{
    await Prisma.$disconnect();
});