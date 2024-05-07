import dotenv from 'dotenv'
dotenv.config();

export const PORT : number =parseInt(process.env.PORT|| '3000',10)
export const MONGODB_URL:string =process.env.MONGODB_URL|| 'mongodb://localhost:27017/bookInventory'
export const JWT_SECRET:string =process.env.JWT_SECRET || 'key'