import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: Number(process.env.PORT),
  mongoUri: process.env.MONGO_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN as string
};
