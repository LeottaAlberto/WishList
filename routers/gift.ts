import { Router } from "express";
import * as giftLib from "../lib/gift";

export const giftRouter = Router()



// curl -X PATCH 'http://localhost:3000/gift/65f1d31a76be04b0ac4cace9' -d '{"name":"changename"}' -H "Content-Type: application/json"
giftRouter.patch('/:giftId',async (req:any,res)=>{
    const body=req.body
    if(!body) throw new Error('no patch provided')
    await giftLib.modGift(req.params.giftId,body)
    res.json({ok:true})
})

giftRouter.post('/create', async (req: any, res)=>{
    try {    
        const body = req.body;
        const newGift = await giftLib.createGift(body);
        res.json({ok:true, id:newGift});
    } catch (error) {
        console.error(error);
    }
});
giftRouter.delete('/:giftId', async (req: any, res)=>{
    try {    
        const newGift = await giftLib.deleteGift(req.params.giftId);
        res.json({ok:true, id:newGift});
    } catch (error) {
        console.error(error);
    }
});
