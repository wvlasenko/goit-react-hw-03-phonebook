import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid4 } from 'uuid';
import ContactFormStl from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    onInputValue = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onSubmitContact = e => {
        e.preventDefault();
        const { name, number } = this.state;

        this.props.onAddContact(name, number);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form
                onSubmit={this.onSubmitContact}
                className={ContactFormStl.ContactForm}
                id={uuid4()}
            >
                <label className={ContactFormStl.label}>
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={this.onInputValue}
                        name="name"
                        className={ContactFormStl.input}
                    />
                </label>
                <label className={ContactFormStl.label}>
                    Phone Number
                    <input
                        type="text"
                        value={number}
                        onChange={this.onInputValue}
                        name="number"
                        className={ContactFormStl.input}
                    />
                </label>
                <button type="submit" className={ContactFormStl.buttonSubmit}>
                    Add contact
                </button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
