import React from 'react';
import { Link } from 'react-router-dom';

class FooterLarge extends React.Component {

    goToTheTopOfPage() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <footer style={{ borderTop: '1px solid', paddingTop: '20px' }}>
                <div>
                    <div className="row ml-5">
                        <div className="col-lg-4">
                            <a className="navbar-brand" href="/">
                                <Link to="/" onClick={this.goToTheTopOfPage} >
                                    <img src="/images/DeleVenner_Logo_WebApp.png" width="160" alt="" />
                                </Link>
                            </a>
                        </div>
                        <div className="col-lg-2">
                            <p className="mt-4"><b>Funktioner</b></p>
                            <p>Grupper</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="mt-4"><b>Foreningen</b></p>
                            <Link to="/omdelevenner" style={{ color: 'black' }} onClick={this.goToTheTopOfPage}>
                                <p>Om DeleVenner</p>
                            </Link>
                            <Link to="/kontakt" style={{ color: 'black' }} onClick={this.goToTheTopOfPage}>
                            <p>Kontakt</p></Link>
                        </div>
                        <div className="col-lg-2">
                            <p className="mt-4"><b>Juridisk</b></p>
                            <Link to="/betingelser" style={{ color: 'black' }} onClick={this.goToTheTopOfPage}>
                                <p>Betingelser</p>
                            </Link>
                            <Link to="/privatlivspolitik" style={{ color: 'black' }} onClick={this.goToTheTopOfPage}>
                                <p>Privatlivspolitik</p>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <p className="mt-4"><b>Sociale medier</b></p>
                            <a href="https://www.facebook.com/DeleVenner.dk/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}><p>Facebook</p></a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid', marginTop: '20px' }}>
                    <p className="ml-5 mt-3">© 2019 ConceptWerk IVS. Alle rettigheder forbeholdes.</p>
                </div>
            </footer>
        );
    }
}

export default FooterLarge;