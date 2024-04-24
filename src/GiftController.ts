import { Body, Controller, Delete, Patch, Path, Post, Route } from "tsoa";
import * as giftLib from "../lib/gift";
import { Prisma as PrismaSchema } from "@prisma/client";
import { TCreateGift } from "../interfaces";

@Route("gift")
export class GiftController extends Controller {

    @Post("create")
    public async createGift(
        @Body() body: TCreateGift) {
        try {
            console.log(body);
            
            const newGift = await giftLib.createGift(body);
            console.log(({ ok: true, id: newGift }));
        } catch (error) {
            console.error(error);
        }
    }

    @Patch("edit/{giftId}")
    public async editGift(
        @Path() giftId: string,
        @Body() body: TCreateGift,
    ){
        try {
            if (!body && !giftId) throw new Error('no patch provided')
            await giftLib.modGift(giftId, body);
            console.log({ ok: true })
        } catch (error) {
            console.log(error);
        }
    }

    @Delete("delete/{giftId}")
    public async deleteGift(
        @Path() giftId:string,
    ){
        try {
            if (!giftId) throw new Error('no id provided')
            await giftLib.deleteGift(giftId);
            console.log({ ok: true })
        } catch (error) {
            console.log(error);
        }
    }

    @Post("sendGift/{userId}")
    public async sendGift(@Path() userId:string,){
        try {
            if (!userId) throw new Error('no id provided')
            const gifts = await giftLib.sendGift(userId);
            console.log({ ok: true })
            return {gifts};
        } catch (error) {
            console.log(error);
        }
    }
}