import React from 'react';

const ContactCard = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={contact.image} className="card-img-top imgdesign" alt="..." />
                <div className="card-body imgdesign">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text">{contact.email}</p>
                    <button className="btn btn-primary" onClick={onEdit}>Edit</button>
                    <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
