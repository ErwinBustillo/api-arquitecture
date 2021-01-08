const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");
module.exports = function ({ CommentController }) {
  const router = Router();
  router.get("/:ideaId", CommentController.getIdeaComments);
  router.get("/:commentId/unique", CommentController.get);
  router.patch("/:commentId", AuthMiddleware, CommentController.update);
  router.delete("/:commentId", AuthMiddleware, CommentController.delete);
  router.post("/:ideaId", AuthMiddleware, CommentController.createComment);
  return router;
};
