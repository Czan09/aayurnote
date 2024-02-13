const {
  getAllUser,
  createUser,
  getUserByID,
  getDetailbyId,
  updateUserByID,
  deleteUserByID,
  changeUserPassword,
} = require("../controller/user.controler");

const router = require("express").Router();
// const verifyAdmin = require("../middleware/verifyAdmin");
// const verifyToken = require("../middleware/verifyToken");

// router.use(verifyToken);
router.route("/user").get(getAllUser).post(createUser);
router
  .route("/user/:id")
  .get(getUserByID)
  .put(updateUserByID)
  .delete(deleteUserByID);
router.route("/user/detail/:id").get(getDetailbyId);
router.route("/user/pass/:id").put(changeUserPassword);
module.exports = router;
