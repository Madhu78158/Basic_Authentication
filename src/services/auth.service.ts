import { findUserByEmail, createUser } from "../repositories/user.repository";
import { hashPassword, comparePassword } from "../utils/password.util";
import { generateToken } from "../utils/token.util";

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error("User already exists");

  const hashed = await hashPassword(password);
  await createUser({ name, email, password: hashed });
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const isValid = await comparePassword(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  return generateToken({ userId: user._id.toString(), role: user.role });
};
