import React, { useEffect, useState, useRef } from "react";
import { ContactService } from "../services/ContactService";
import ContactCard from "../component/ContactCard";
import DeleteContactModalDialog from "../component/DeleteContactModalDialog";
import AddUpdateContactModalDialog from "../component/AddUpdateContactModalDialog";

const contactService = new ContactService();

const ViewAll = () => {
  const [contacts, setContacts] = useState([]);
  const deleteModalRef = useRef();
  const addUpdateModalRef = useRef();

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    contactService
      .getContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteContact = (id) => {
    contactService
      .deleteContact(id)
      .then((data) => {
        getContacts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSaveContact = (contact) => {
    if (contact.id) {
      contactService
        .updateContact(contact)
        .then((data) => {
          getContacts();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      contactService
        .addContact(contact)
        .then((data) => {
          getContacts();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const openDeleteModal = (contact) => {
    deleteModalRef.current.openModal(contact);
  };

  const openAddUpdateModal = (contact = null) => {
    addUpdateModalRef.current.openModal(contact);
  };

  return (
    <div>
      
      <DeleteContactModalDialog ref={deleteModalRef} onDelete={handleDeleteContact} />
      <AddUpdateContactModalDialog ref={addUpdateModalRef} onSave={handleSaveContact} />

      {/* Contact Cards */}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onDelete={() => openDeleteModal(contact)}
              onEdit={() => openAddUpdateModal(contact)}
            />
          ))}
          <div className="col">
            <div
              className="card"
              style={{ height: "263px", display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => openAddUpdateModal()}
            >
              <div
                className="card-body"
                style={{ position: "relative", top: "100px" }}
              >
                <i className="fa fa-plus"></i>
                <span> Add Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
