import { Prisma } from "../src/db";


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

