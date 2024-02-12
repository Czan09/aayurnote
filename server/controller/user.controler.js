const userService = require("../services/user.services");

const getAllUser = async (req, res) => {
  const result = await userService.getAllUser();
  res.status(200).json(result);
};

const createUser = async (req, res) => {
  const { username,email,password } = req.body;
  console.log(req.body);
  // try {
  const user = await userService.createUser({
    username,
    email,
    password
  });
  res.status(201).json({
    status: "success",
    user,
  });
  // } catch (error) {
  // throw new ErrorHandler(error.statusCode, "create error");
  // }
};

const getUserByID = async (req, res) => {
  const { id } = req.params;
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const getDetailbyId = async (req, res) => {
  const id = req.params.id;
  console.log("cont "+id)
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.getDetailbyId(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const updateUserByID = async (req, res) => {
  const { id } = req.params;
  const { username,email} = req.body;
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.updateUserByID({
      id,
      username,
      email
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};


const changeUserPassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.changeUserPassword({
      id,
      password,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

const deleteUserByID = async (req, res) => {
  const { id } = req.params;
  // if (req.user.role.includes("admin")) {
  try {
    const user = await userService.deleteUserByID(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error)
  }
  // }
  // throw new ErrorHandler(401, "Unauthorized");
};

module.exports = {
  getAllUser,
  createUser,
  getUserByID,
  getDetailbyId,
  updateUserByID,
  deleteUserByID,
  changeUserPassword,
};
