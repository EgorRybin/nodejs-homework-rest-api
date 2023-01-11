const express = require("express");
const ctrl = require("../../controllers/contacts");
const { isValidId, validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.patch(
  "/:id/favorite", authenticate, isValidId, 
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:id", authenticate, ctrl.deleteContact);

router.put(
  "/:id",
  authenticate,
  isValidId, validateBody(schemas.addSchema),
  ctrl.updateById
);

module.exports = router;
