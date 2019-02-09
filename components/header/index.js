import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { select } from 'components/header/header-selector';
import { connect } from 'react-redux';

import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header-component">
                <div className="menu-container">
                    <NavLink
                        exact
                        to="/"
                        className="header-link"
                        activeClassName="active"
                    >
                        home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="header-link"
                        activeClassName="active"
                    >
                        about
                    </NavLink>
                </div>

                <div className="user-info-container">
                    llamas clicked: {this.props.llama.clicks}
                </div>
            </div>
        );
    }
}

export default connect(select)(Header);