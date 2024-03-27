import { Body, Controller, Delete, Patch, Path, Post, Route } from "tsoa";
import * as categoryLib from "../lib/category";
import { Prisma as PrismaSchema } from "@prisma/client";

@Route("category")
export class CategoryController extends Controller {

    @Post("create")
    public async createCategory(
        @Body() body: PrismaSchema.CategoryCreateArgs["data"]) {
        try {
            const newCategory = await categoryLib.createCategory(body);
            console.log(({ ok: true, id: newCategory }));
        } catch (error) {
            console.error(error);
        }
    }

    @Patch("edit/{categoryId}")
    public async editGift(
        @Path() userId: string,
        @Path() categoryId: string,
        @Body() body: PrismaSchema.CategoryCreateArgs["data"],
    ){
        try {
            if (!body && !userId && !categoryId) throw new Error('no patch provided')
            await categoryLib.modCategory(userId,categoryId, body);
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