import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class Users extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    formatMoney(number) {
        return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.newUser !== this.props.users) {
            this.props.users.unshift(nextProps.newUser);
        }
    }


    render() {
        return (
            <div>
                {this.props.users.map(user => (
                    <div key={user.id} className="person">
                        <strong>{user.name}</strong>
                        {this.formatMoney(user.money)}
                    </div>
                ))}

            </div>
        )
    }
}

Users.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    newUser: PropTypes.object,
};

const mapStateToProps = state => ({
    users: state.users.usersData,
    newUser: state.users.newUser,
});

export default connect(mapStateToProps, { fetchUsers })(Users);