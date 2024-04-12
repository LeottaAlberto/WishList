import { Body, Controller, Delete, Patch, Path, Post, Route } from "tsoa";
import * as categoryLib from "../lib/category";
import { Prisma as PrismaSchema } from "@prisma/client";
import { TCreateCategory } from "../interfaces";

@Route("category")
export class CategoryController extends Controller {

    @Post("create")
    public async createCategory(
        @Body() body: TCreateCategory) {
        try {
            const newCategory = await categoryLib.createCategory(body);
            console.log(({ ok: true, id: newCategory }));
        } catch (error) {
            console.error(error);
        }
    }

    @Patch("edit/{userId}")
    public async editGift(
        @Path() userId: string,
        @Body() body: TCreateCategory,
    ){
        try {
            if (!body && !userId) throw new Error('no patch provided')
            await categoryLib.modCategory(userId, body);
            console.log({ ok: true })
        } catch (error) {
            console.log(error);
        }
    }

    @Delete("delete/{categoryId}")
    public async deleteCategory(
        @Path() categoryId:string,
    ){
        try {
            if (!categoryId) throw new Error('no id provided')
            await categoryLib.deleteCategory(categoryId);
            console.log({ ok: true })
        } catch (error) {
            console.log(error);
        }
    }
}