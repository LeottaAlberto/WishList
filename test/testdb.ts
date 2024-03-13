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

/**
 * 
 * @param user 
 * @param category 
 * @param priority 
 * @param description 
 */
async function createGift(user: string, category: string, priority: string, description: string) {
    const newGift = await Prisma.gift.create({
        data: {
            user: user,
            category: category,
            priority: priority,
            description: description,
        }
    });
    console.log(newGift);
    checkGift(newGift.id);
}

async function checkGift(id: string) {
    const gift = await Prisma.gift.findFirst({
        where: {
            id: id
        }
    });
    if(gift !== null) {
        console.log("regalo esistente");
        deleteGift(gift.id);
    }
    else console.log("regalo non esistente");
    
}

async function deleteGift(id: string) {
    const deleteGift = await Prisma.gift.delete({
        where: {
            id: id,
        },
    });
}

// createGift('65f1bacc3037064e96f5bbcf', '1', '100', 'regalo bellissimo che vorrei avere sempre con me').catch((err) => {
//     console.error('Error: ', err);
//     process.exit(1);
// }).finally(async ()=>{
//     await Prisma.$disconnect();
// });
deleteGift('65f1bacc3037064e96f5bbcf').catch((err) => {
    console.error('Error: ', err);
    process.exit(1);
}).finally(async ()=>{
    await Prisma.$disconnect();
});

