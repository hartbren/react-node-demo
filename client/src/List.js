import React, { Component } from "react";
import axios from 'axios'

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        const apiUrl = '/api/list-messages';

        axios.get(apiUrl)
            .then((resp) => {
                const allMsgs = resp.data;
                this.setState({ messages: allMsgs });
                console.log(this.state.messages);
            }).catch(err => {
                console.error('Error: ' + err);
            });
    }

    render() {

        if(this.state.messages.length > 0) {

            return (
                <div className="message-list">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                        </thead>
                        <tbody>
                        {this.state.messages.map((m, idx) => {
                            return <tr>
                                <td>{m.name}</td><td>{m.email}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            );

        }
        else {

            return (
                <div className="message-list">
                    <ul>
                        <li>No messages yet</li>
                    </ul>
                </div>
            );

        }
    }
}

export default List;