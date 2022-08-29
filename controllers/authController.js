import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all fields");
  }

  //check if email exist
  const useAlreadyExists = await User.findOne({ email });

  if (useAlreadyExists) {
    throw new BadRequestError("email already in use");
  }

  const user = await User.create({ email, name, password });
  res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res) => {
  await res.send("login");
};

const updateUser = async (req, res) => {
  await res.send("update user");
};

export { register, login, updateUser };
