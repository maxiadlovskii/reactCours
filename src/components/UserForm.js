import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    state = {
        username: ''
    }
    render() {
        return (
            <div>
                Name <input type="text" value={this.state.username} onChange={this.handleUserName}/>
            </div>
        );
    }

    handleUserName = ev => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default UserForm;
