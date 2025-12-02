import { Request } from "express";

export type CustomRequest = Request & { user?: { id: string } };



export type TCreateCategory = {
    id?: string
    userId: string
    name: string
}

export type TCreateGift = {
    id?: string
    name: string
    userId: string
    categoryId: string
    priority: string
    description: string
}

export type TEditGift = {
    id?: string
    name?: string
    userId?: string
    categoryId?: string
    priority?: string
    description?: string
}


export type TCreateUser = {
    id?: string
    email: string
    username: string
    password: string
    dateBirth: Date
    gender: string
}