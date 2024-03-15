import { Prisma } from "../src/db";


export async function createGift(gift: {user: string, name: string, category: string, priority: string, description: string}){
    const newGift = await Prisma.gift.create({
        data: gift
    });
    console.log("Gift Created Succesflully!");
    return newGift.id;
}

export async function modGift(id: string, gift: {name: string, category: string, priority: string, description: string}) {
    const mod = await Prisma.gift.update({

        where:{
            id: id
        },
        data:gift
    });
    
    console.log(mod);
    return mod.id;
}

/**
 * 
 * @param id 
 */
export async function checkGift(id: string) {
    let isExist = false;
    const gift = await Prisma.gift.findFirst({
        where: {
            id
        }
    });
    if(gift !== null) {
        // console.log("Gift Exist");
        isExist = true;
    }
    else console.log("Gift doesn't Exist");

    return isExist;
    
}

export async function deleteGift(id: string) {
    const deleteGift = await Prisma.gift.delete({
        where: {
            id: id,
        },
    });
    console.log('Delete Succesfully');  
    return deleteGift.id;
}
    