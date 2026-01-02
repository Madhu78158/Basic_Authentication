import jwt from "jsonwebtoken";
import { env } from "../config/env";
import dotenv from "dotenv";
dotenv.config();

export interface JwtPayload {
  userId: string;
  role: string;
}

export const generateToken = (payload: JwtPayload): string =>
  jwt.sign(payload, env.jwtSecret);

export const verifyToken = (token: string): JwtPayload =>
  jwt.verify(token, env.jwtSecret) as JwtPayload;