import { Request } from "express";

export type CustomRequest = Request & { user?: { id: string } };



export type TCreateCategory = {
    id?:string
    user: any
    name: string
}

export type TCreateGift = {
    id?: string
    name: string
    user: any
    category: TCreateCategory
    priority: string
    description: string
}

export type TCreateUser = {
    id?: string
    email: string
    username: string
    password: string
    dateBirth: Date
    gender: string
}