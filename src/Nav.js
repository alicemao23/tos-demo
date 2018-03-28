import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <nav className="nav">
                <Link className="logo" to="/">
                    <span>thisopenspace</span>
                </Link>
                <ul className="nav-container">
                    <li><Link className="nav-item" to="/paginate">Pagination View</Link></li>
                    <li><Link className="nav-item" to="/infinite">Scroll View</Link></li>
                </ul>

            </nav>
        )
    }
}


export default Nav; 