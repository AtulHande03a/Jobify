const register = async (req, res) => {
  await res.send("Register");
};

const login = async (req, res) => {
  await res.send("login");
};

const updateUser = async (req, res) => {
  await res.send("update user");
};

export { register, login, updateUser };
