import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../actions/auth'

const HomePage = ({ isAuthenticated, logout }) => (
            <div>
                <h1>HomePage</h1>
                {isAuthenticated ?
                    (<button onClick={() => logout()}>Logout</button>) :
                    (<Link to="/login">Login</Link>)}
                <Link to="/new">New</Link>
                <Link to="/search">Search</Link>
            </div>
        );

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, { logout })(HomePage);
