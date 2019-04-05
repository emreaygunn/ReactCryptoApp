import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <li>
                {this.props.contacts.name} {this.props.contacts.id}
            </li>
        )
    }
}

export default Contact;