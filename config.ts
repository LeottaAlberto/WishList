export const CONST_VALUES={
    jwt_secret:"cjnasiuJBU23@JV",
    mongo_uri: process.env.DATABASE_URL || "mongodb+srv://leottaalberto43:2CwD4BX6BtdGEeXN@pctodb.ijdpldo.mongodb.net/pcto_wish_db",
    port: process.env.PORT? Number (process.env.PORT): 3000
}