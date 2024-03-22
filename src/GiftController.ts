import { Body, Controller, Patch, Post, Route } from "tsoa";
import * as giftLib from "../lib/gift";
import { Prisma as PrismaSchema } from "@prisma/client";
import { login } from "../lib/login";
import { CONST_VALUES } from "../config";
import { Prisma } from "../lib/db";


/*@Route("gift")
export class GiftController extends Controller{

    @Post("login")public async loginUser(body: {name: string; user: string; category: string; priority: string; description: string}){
        try {
            const newGift = await giftLib.createGift(body);
            res.json({ ok: true, id: newGift });
        } catch (error) {
            console.error(error);
        }
    }
}*/