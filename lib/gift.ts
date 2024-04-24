import { TCreateGift } from "../interfaces";
import { Prisma } from "./db";
import { Prisma as PrismaSchema } from "@prisma/client";


export async function createGift(gift: TCreateGift){
    try {
        const newGift = await Prisma.gift.create({
            data: gift as any
        });
        return newGift.id;
    } catch (error) {
        console.log(new Error('Couldn\'t create a gift: '), error);
    }
    console.log("Gift Created Succesfully!");
}

export async function modGift(giftId:string, gift: {}) {
    try {
        const mod = await Prisma.gift.update({
            where:{
                id: giftId,
            },
            data:gift
        });
        console.log("Gift Modified Succesfully");
        return mod.id;
    } catch (error) {   
        console.log(new Error('Couldn\'t update a gift: '), error);
    }
}

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
    console.log('Gifts Delete Succesfully');  
    // return deleteGift.id;
}

export async function sendGift(userId: string) {
    const userList = await Prisma.gift.findMany({
        where: {
            userId: userId
        },
    });
    console.log(userList);
    
    if(userList !== null){
        console.log('Gifts Sended Succesfully');  
        return userList;
    }
    else {
        return new Error('Error While Sending Gifts');
    }
    
}
    