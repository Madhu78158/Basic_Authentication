import { JwtPayload } from "../utils/token.util";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}