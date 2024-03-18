import { Router } from "express";
import { editUser } from "../lib/login";
import { CustomRequest } from "../interfaces";

const userRouter = Router();

//curl -X POST 'http://localhost:3000/user/edit' -H 'Content-Type: Application/json' -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxZDA1OGQ2MjA4ODZlMmI2ZjliYzciLCJpYXQiOjE3MTA3NzM1NDl9.dfkRdc7NAZ6h4e-xM6D5TjrVGS5E5TwD0LYXZKRP_4Y' -d '{"email":"pa@ciao.it"}'
userRouter.post("/edit", async (req: CustomRequest, res) => {
  const body = req.body;
  const id = req.user?.id;
  try {
    if (!id) return new Error("id not provided");
    const token = await editUser(id, body);
    res.json(token);
  } catch (error) {
    res.status(413).send("wrong userorization");
  }
  console.log("User edited succesfully");
});

export default userRouter;
