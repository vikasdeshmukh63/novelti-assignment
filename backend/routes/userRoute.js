const { createUser, getUser, updateUser, deleteUser, getUserDetails } = require("../controllers/userControllers");
const router = require("express").Router();

// create user route
router.route("/user/new").post(createUser);

//get list of users route
router.route("/users").get(getUser);

//update, delete and get user route
router.route("/user/:id").put(updateUser).delete(deleteUser).get(getUserDetails);


module.exports = router;