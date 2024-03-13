import { Prisma } from "../src/db";

async function test() {
    await Prisma.$connect();
    
    // CREATE 
    // const ciao = await Prisma.user.create({
    //     data: {
    //         username: 'Pasticcio',
    //         password: '123prova',
    //         email: 'pasticcio@ciao.it',
    //     }
    // });
    
    // SELECT
    const check = await Prisma.user.findFirst({
        where: {
            username: 'Pasticcio',
        }
    });
    console.log(check);
}

async function createGift(user: string, category: string, priority: string, description: string) {
    // const newGift = await Prisma..create({

    // });
}

test().catch((err) => {
    console.error('Error: ', err);
    process.exit(1);
}).finally(async ()=>{
    await Prisma.$disconnect();
});

