import { Router } from "express";
import * as giftLib from "../lib/gift";

export const giftRouter = Router()


// curl -X PATCH 'http://localhost:3000/gift/65f1d31a76be04b0ac4cace9' -H 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWUwMGY4OTA4YTc0ZGIwZGRhNzAiLCJpYXQiOjE3MTA3NzU4MDl9.wRNpDHxz-SGAng-JzclZ43dX0KiglCC9jl6itngw2uo' -d '{"name":"oldWish", "category":"giocattoli", "priority":"1000", "description":"ciao mamma luigi fa la maestra"}' -H "Content-Type: application/json"
giftRouter.patch('/:giftId', async (req: any, res) => {
    try{
        const body = req.body
        const userId = req.params.authorization
        const giftId = req.params.giftId
        if (!body) throw new Error('no patch provided')
        await giftLib.modGift(userId, giftId, body);
        res.json({ ok: true })
    } catch(error){
        console.log(error);
    }
})

// curl -X POST 'http://localhost:3000/gift/create' -d '{"name":"computer", "user":"65f85e00f8908a74db0dda70", "category":"COMPRALO ORA", "priority":"100000", "description":"un nuovo regalo per il mio bel natale"}' -H "Content-Type: application/json"
giftRouter.post('/', async (req: any, res) => {
    try {
        const body = req.body;
        const newGift = await giftLib.createGift(body);
        res.json({ ok: true, id: newGift });
    } catch (error) {
        console.error(error);
    }
});

// curl -X DELETE 'http://localhost:3000/gift/65f1d31a76be04b0ac4cace9' -H "Content-Type: application/json"
giftRouter.delete('/:giftId', async (req: any, res) => {
    try {
        const newGift = await giftLib.deleteGift(req.params.giftId);
        res.json({ ok: true, id: newGift });
    } catch (error) {
        console.error(error);
    }
});
