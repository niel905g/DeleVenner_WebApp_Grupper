import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{ borderBottom: '1px solid' }}>
                <div className="navbar-brand">
                    <Link to="/">
                        <img className="ml-4 mb-3" src="/images/DeleVenner_Logo_WebApp.png" width="160" alt="" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-md-0">

                        <li className="nav-item ml-3">
                            <Link to="/omdelevenner">
                                <a className="nav-link" href="/omdelevenner" style={{ color: 'black', fontSize: '18px' }}>Om DeleVenner</a>
                            </Link>
                        </li>
                        <li className="nav-item ml-3">
                            <a className="nav-link" href="/" style={{ color: 'black', fontSize: '18px' }}>Grupper</a>
                        </li>

                    </ul>
                    <Link to="/opretbruger">
                        <button type="button" className="btn btn-success  btn-lg pl-4 pr-4" style={{ backgroundColor: '#008F91', borderColor: '#008F91' }}>Opret bruger</button>
                    </Link>
                    <a className="nav-link ml-2 mr-2" href="/" style={{ color: 'black', fontSize: '18px' }}>Login</a>
                </div>
            </nav>
        );
    }
}

export default Navigation;