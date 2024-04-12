import { TCreateCategory } from "../interfaces";
import { Prisma } from "./db";
import { Prisma as PrismaSchema } from "@prisma/client";


export async function createCategory(category:TCreateCategory){
    const newCategory = await Prisma.category.create({
        data: category
    });
    console.log("Category Created Succesflully!");
    return newCategory.id;
}

export async function modCategory(userId: string, category:Partial<TCreateCategory>) {
    const mod = await Prisma.category.update({

        where:{
            id: category.id,
            user: userId as any
        },
        data:category
    });
    
    console.log(mod);
    return mod.id;
}

/**
 * 
 * @param id 
 */
export async function checkCategory(id: string) {
    let isExist = false;
    const category = await Prisma.category.findFirst({
        where: {
            id
        }
    });
    if(category !== null) {
        // console.log("Category Exist");
        isExist = true;
    }
    else console.log("Category doesn't Exist");

    return isExist;
    
}

export async function deleteCategory(id: string) {
    const deleteCategory = await Prisma.category.delete({
        where: {
            id: id,
        },
    });
    console.log('Delete Succesfully');  
    return deleteCategory.id;
}
    