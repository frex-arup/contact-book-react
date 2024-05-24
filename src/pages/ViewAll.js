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

  const deleteContact = (id) => {
    contactService.deleteContact(id).then((data) => {
      getContacts();
    }).catch((error) => {
      console.error(error);
    });
  }

  const addContact = (contact) => {
    contactService.addContact(contact).then((data) => {
      getContacts();
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
            <div className="col ">
            <div className="card" style={{height:'263px',display:'flex',alignItems:'center'}}>
              <div className="card-body" style={{position:'relative',top:'100px'}}>
                <i className="fa fa-plus"></i>
                <span> Add Contact</span>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </>
    </div>
  );
};

export default ViewAll;