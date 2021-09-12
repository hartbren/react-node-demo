import React, { Component } from "react";

import axios from 'axios';


class Send extends Component {

    constructor() {
        super();
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleOnBlur = e => {
        if(e.target.validity.valid) {
            e.target.classList.remove('has-error');
        }
        else {
            e.target.classList.add('has-error');
        }
    };

    onSubmit = e => {

        e.preventDefault();

        if(e.target.checkValidity()) {

            const formData = new FormData(e.target);

            let postObj= {};
            formData.forEach((value, key) => postObj[key] = value);

            axios.post('/api/send-message', postObj)
                .then(resp => {
                    this.setState({"formStatus": ""});
                    e.target.reset();
                });
        }
        else {
            this.setState({"formStatus": "Please correct errors before submitting"});
        }
    };

    render() {
        return (
            <div>
                <h2>Send a Message</h2>
                <form
                    onSubmit={this.onSubmit}
                    noValidate
                >
                    <label htmlFor="new-msg-to-name-input" className="label__lg">
                        To Name
                    </label>
                    <input
                        type="text"
                        id="new-msg-to-name-input"
                        className="input input__lg"
                        name="name"
                        autoComplete="off"
                        required
                        onBlur={this.handleOnBlur.bind(this)}
                    />

                    <label htmlFor="new-msg-to-name-input" className="label__lg">
                        To Email
                    </label>
                    <input
                        type="email"
                        id="new-msg-to-email-input"
                        className="input input__lg"
                        name="email"
                        autoComplete="off"
                        required
                        onBlur={this.handleOnBlur.bind(this)}
                    />

                    <label htmlFor="new-msg-to-name-input" className="label__lg">
                        PIN (4 digits)
                    </label>
                    <input
                        type="password"
                        id="new-msg-pin-input"
                        className="input input__lg"
                        name="password"
                        autoComplete="off"
                        minLength={4}
                        maxLength={4}
                        pattern="[\d]*"
                        required
                        onBlur={this.handleOnBlur.bind(this)}
                    />

                    <label htmlFor="new-msg-to-name-input" className="label__lg">
                        Message Content (Free text, max 48 characters)
                    </label>
                    <input
                        type="text"
                        id="new-msg-content-input"
                        className="input input__lg"
                        name="content"
                        autoComplete="off"
                        maxLength={48}
                        required
                        onBlur={this.handleOnBlur.bind(this)}
                    />

                    <span className="form-status"> {this.state.formStatus}</span><br />

                    <button type="submit" className="btn btn__primary btn__lg">
                        Send
                    </button>
                </form>
            </div>
        );
    }
}

export default Send;
