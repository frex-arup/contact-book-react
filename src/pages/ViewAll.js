import React, { useEffect } from "react";
import img from "../image/cardimage.avif";
import { useState } from "react";
import { ContactService } from "../services/ContactService";
const contactService = new ContactService();

const ContactCard = ({ contact }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top imgdesign" alt="..." />
        <div className="card-body imgdesign">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.description}</p>
        </div>
      </div>
    </div>
  );
};

const ViewAll = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    contactService.getContacts().then((data) => {
      setContacts(data);
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default ViewAll;
