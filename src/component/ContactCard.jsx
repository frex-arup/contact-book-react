import img from "../image/cardimage.avif";

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

export default ContactCard;