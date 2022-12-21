const fs = require("fs").promises;
const path = require("path");
const { v4: uuid } = require("uuid");
const contactsPath = path.join(__dirname, "contacts.json");

async function saveToContacts(contacts = []) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(({ id }) => id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex(({ id }) => id === contactId);
  if (index === -1) {
    throw new Error("contact not found");
  }
  const [deletedcontact] = contacts.splice(index, 1);
  await saveToContacts(contacts);
  return deletedcontact;
}

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const contact = {
    name,
    email,
    phone,
    id: uuid(),
  };
  contacts.push(contact);
  await saveToContacts(contacts);
  return contact;
}
async function updateContact(id, body) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
      if (index === -1) {
        return null;
  }
   contacts[index] = { id, ...body };
   await saveToContacts(contacts);
   return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
