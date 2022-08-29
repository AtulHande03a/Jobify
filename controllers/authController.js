import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res) => {
  await res.send("login");
};

const updateUser = async (req, res) => {
  await res.send("update user");
};

export { register, login, updateUser };
