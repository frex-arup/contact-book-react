import React, { forwardRef, useImperativeHandle, useState } from 'react';

const DeleteContactModalDialog = forwardRef(({ onDelete }, ref) => {
    const [show, setShow] = useState(false);
    const [contact, setContact] = useState(null);

    useImperativeHandle(ref, () => ({
        openModal(contact) {
            setContact(contact);
            setShow(true);
        },
        closeModal() {
            setShow(false);
        }
    }));

    const handleDeleteContact = () => {
        onDelete(contact.id);
        setShow(false);
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Confirmation</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setShow(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete the contact: {contact?.name}?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleDeleteContact}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default DeleteContactModalDialog;
