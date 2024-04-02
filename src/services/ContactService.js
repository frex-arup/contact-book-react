export class ContactService {
    getContacts() {
        const contacts = localStorage.getItem("contacts");
        if (contacts) {
            return JSON.parse(contacts);
        }
        return [];
    }

    addContact(contact) {
        const contacts = this.getContacts();
        const existingContact = contacts.find(
            (c) => c.email === contact.email || c.mobileNo === contact.mobileNo
        );
        if (existingContact) {
            alert(`${existingContact.name} is already present in the list`);
            return;
        }
        contacts.push(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    deleteContact(id) {
        const contacts = this.getContacts();
        const index = contacts.findIndex((contact) => contact.id === id);
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    updateContact(contact) {
        const contacts = this.getContacts();
        const index = contacts.indexOf(contact);
        contacts[index] = contact;
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
}