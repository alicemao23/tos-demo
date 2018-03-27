import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <div className="logo">
                    <span>thisopenspace</span>
                </div>
                <ul className="nav-container">
                    <li><Link to="/paginate">Pagination View</Link></li>
                    <li><Link to="/infinite">Infinity View</Link></li>
                </ul>

            </nav>
        )
    }
}


export default Nav; 