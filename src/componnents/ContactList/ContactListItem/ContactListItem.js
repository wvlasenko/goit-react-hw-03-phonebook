import PropTypes from 'prop-types';
import ContactListItemStl from './ContactListItem.module.css';

function ContactListItem({ contact, onRemove }) {
    const { name, number } = contact;
    return (
        <li className={ContactListItemStl.container}>
            <div className={ContactListItemStl.contactInfo}>
                {name} : {number}
            </div>
            <section className={ContactListItemStl.action}>
                <button type="button" onClick={onRemove}>
                    Delete
                </button>
            </section>
        </li>
    );
}
ContactListItem.propTypes = {
    contact: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;
