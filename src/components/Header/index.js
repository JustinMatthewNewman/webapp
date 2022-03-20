import React from 'react';
import { Link, useLocation  } from 'react-router-dom';

import './style.scss';

const Header = props => {
    return (
        <header className="header">
        <div className="wrap">
            
            <Link to="/">
            <h1>E-Shop</h1>
            </Link>
            <div className="callToActions">
                <ul>
                    <li>
                        <Link to="/registration">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>




        </div>

        </header>
    );
};

export default Header;
