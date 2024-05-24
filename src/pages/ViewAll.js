import React, { useEffect } from "react";
import { useState } from "react";
import { ContactService } from "../services/ContactService";
import ContactCard from "../component/ContactCard";
const contactService = new ContactService();



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
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <i className="fa fa-plus"></i>
                <span> Add Contact</span>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ViewAll;
