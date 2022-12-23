const contactsOperations = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsOperations.removeContact(id);
    if (!result) {
      throw HttpError(404);
    }
    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = deleteContact;
