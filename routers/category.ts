import { Router } from "express";
import * as CategoryLib from "../lib/category";

export const categoryRouter = Router()



// curl -X PATCH 'http://localhost:3000/category/65f1d31a76be04b0ac4cace9' -d '{"name":"changename"}' -H "Content-Type: application/json"
categoryRouter.patch('/:categoryId', async (req:any,res)=>{
    try{
        const body=req.body;
        const userId = req.user.authorization;
        const categoryId = req.params.categoryId;
        if(!body) throw new Error('no patch provided');
        await CategoryLib.modCategory(userId, categoryId, body);
        res.json({ok:true});
    } catch (error){
        return new Error('Category Modified Failed');
    }
})

categoryRouter.post('/', async (req: any, res)=>{
    try {    
        const body = req.body;
        const newCategory = await CategoryLib.createCategory(body);
        res.json({ok:true, id:newCategory});
    } catch (error) {
        console.error(error);
    }
});
categoryRouter.delete('/:categoryId', async (req: any, res)=>{
    try {    
        const newCategory = await CategoryLib.deleteCategory(req.params.categoryId);
        res.json({ok:true, id:newCategory});
    } catch (error) {
        console.error(error);
    }
});
