const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.getContactById(id);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;