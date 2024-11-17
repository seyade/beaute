import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

export const config = {
  PORT: Number(process.env.PORT) || 3000,
};

export const prisma = new PrismaClient();
