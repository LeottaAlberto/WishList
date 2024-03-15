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
async function createGift(user: string, name: string, category: string, priority: string, description: string) {
    const newGift = await Prisma.gift.create({
        data: {
            user: user,
            name: name,
            category: category,
            priority: priority,
            description: description,
        }
    });
    console.log("Gift Created Succesflully: " + newGift);
    checkGift(newGift.id);
}

async function checkGift(id: string) {
    const gift = await Prisma.gift.findFirst({
        where: {
            id: id
        }
    });
    if(gift !== null) {
        console.log("Gift Exist");
        // deleteGift(gift.id);
    }
    else console.log("Gift doesn't Exist");
    
}

// async function deleteGift(id: string) {
//     modGift(id, 'oro', '2', '50', 'Tutto quel che luccia e\' ORO'); 
//     // const deleteGift = await Prisma.gift.delete({
//     //     where: {
//     //         id: id,
//     //     },
//     // });
//     // console.log(deleteGift);  
// }

export async function modGift(id: string, gift: {name: string, category: string, priority: string, description: string}) {
    const mod = await Prisma.gift.update({

        where:{
            id: id
        },
        data:gift
    });
    
    console.log(mod);
    return
}

Prisma.$connect().then(connOk=>{
    createGift('65f1bacc3037064e96f5bbcf', 'ORO','2', '50', 'Non e\' tutto oro quel che luccica').catch((err) => {
        console.error('Error: ', err);
        process.exit(1);
    }).finally(async ()=>{
        await Prisma.$disconnect();
    });
    // deleteGift('65f1bacc3037064e96f5bbcf').catch((err) => {
    //     console.error('Error: ', err);
    //     process.exit(1);
    // }).finally(async ()=>{
    //     await Prisma.$disconnect();
    // }); 
}).catch(err => {
    console.error(err);
    
});

