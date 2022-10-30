const express = require("express");

const postControllers = require("../controllers/postControllers");
const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById);
router.route("/").delete(postControllers.deleteUser);
router.route("/").put(postControllers.updateData);

module.exports = router;