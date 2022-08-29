import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all fields");
  }

  //check if email exist
  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BadRequestError("email already in use");
  }

  const user = await User.create({ email, name, password });

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      location: user.location,
      lastName: user.lastName,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  await res.send("login");
};

const updateUser = async (req, res) => {
  await res.send("update user");
};

export { register, login, updateUser };
