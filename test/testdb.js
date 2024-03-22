"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modGift = void 0;
const db_1 = require("../lib/db");
async function modGift(id, gift) {
    const mod = await db_1.Prisma.gift.update({
        where: {
            id: id
        },
        data: gift
    });
    console.log(mod);
    return;
}
exports.modGift = modGift;
