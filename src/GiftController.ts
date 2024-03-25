import { Body, Controller, Patch, Path, Post, Route } from "tsoa";
import * as giftLib from "../lib/gift";
import { Prisma as PrismaSchema } from "@prisma/client";


@Route("gift")
export class GiftController extends Controller {

    // @Post("create")
    // public async createGift(
    //     @Body() body: PrismaSchema.GiftCreateArgs["data"]) {
    //     try {
    //         const newGift = await giftLib.createGift(body);
    //         console.log(({ ok: true, id: newGift }));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // @Patch("edit/{giftId}")
    // public async editGift(
    //     @Path() giftId: string,
    //     @Body() body: PrismaSchema.GiftCreateArgs["data"],
    // ) {

    //     try {
    //         if (!body && !giftId) throw new Error('no patch provided')
    //         await giftLib.modGift(giftId, body);
    //         console.log({ ok: true })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}