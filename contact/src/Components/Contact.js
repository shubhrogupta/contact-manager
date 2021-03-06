import React from 'react'
import PropTypes from 'prop-types';

function Contact({name, email, number}) {
    return (
        <div className = "card card-body mb-3" id="card">
            <h4>{name}</h4>
                <ul className="list-group">
                    <li className="list-group-item"><b>email :</b> {email}</li>
                    <li className="list-group-item"><b>phone-number</b> : {number}</li>
                </ul>
        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
};

export default Contact;

