import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewUser } from '../actions/userActions';

class AddUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            error: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let formIsValid = true;
        let name = this.state.name

        if (name.length === 0) {
            formIsValid = false;
            this.setState({ error: "Name field Cannot be empty" });
        } else {
            formIsValid = true;
        }

        if (formIsValid) {
            const user = {
                name: this.state.name,
            };

            this.props.addNewUser(user)
            this.setState({
                name: '',
                error: ''
            });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name: </label>
                        <br />
                        <input
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                        />
                        <span style={{ color: "red" }}>{this.state.error}</span>
                    </div>
                    <button type="submit">Add User </button>
                </form>
            </div>
        )
    }
}

AddUsers.propTypes = {
    addNewUser: PropTypes.func.isRequired,
};

export default connect(null, { addNewUser })(AddUsers);