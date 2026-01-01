import { User, IUser } from "../models/user.model";

export const findUserByEmail = (email: string): Promise<IUser | null> =>
  User.findOne({ email });

export const findUserById = (id: string): Promise<IUser | null> =>
  User.findById(id);

export const createUser = (data: Partial<IUser>): Promise<IUser> =>
  User.create(data);