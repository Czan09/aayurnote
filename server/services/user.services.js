const {
  getAllUsersDb,
  getUserByIdDb,
  getDetailbyId,
  createUserDb,
  updateUserByID,
  deleteUserByID,
  changeUserPasswordDB,
} = require("../db/user.db.js");

class UserService {
  getAllUser = async () => {
    try {
      return await getAllUsersDb();
    } catch (error) {
      console.log(error)
    }
  };
  createUser = async (user) => {
    try {
      return await createUserDb(user);
    } catch (error) {
      console.log(error)
    }
  };
  getUserById = async (id) => {
    try {
      const user = await getUserByIdDb(id);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error)
    }
  };
  getDetailbyId = async (id) => {
    try {
      const user = await getDetailbyId(id);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error)
    }
  };
  updateUserByID = async (id) => {
    try {
      const user = await updateUserByID(id);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error)
    }
  };
  deleteUserByID = async (ID) => {
    try {
      const user = await deleteUserByID(ID);
      return user;
    } catch (error) {
      console.log(error)
    }
  };
  changeUserPassword = async (id) => {
    try {
      const user = await changeUserPasswordDB(id);
      return user;
    } catch (error) {
      console.log(error)
    }
  };
}

module.exports = new UserService();
