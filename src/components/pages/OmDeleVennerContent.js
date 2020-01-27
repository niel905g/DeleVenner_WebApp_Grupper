import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OmDeleVennerContent extends Component {

    goToTheTopOfPage() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginTop: '100px' }}>
                    <h1 className="text-center" style={{ marginBottom: '100px' }}>Om DeleVenner</h1>
                    <p style={{ fontSize: '18px' }}>
                        Vi er en nystartet klub der henvender sig til alle aldersgrupper, racer og køn!
                        <br /><br />
                        Vi har ingen politiske eller religiøse interesser! – Men vi vil heller ikke røvrendes! – Jo flere vi er, jo stærkere er vi!
                        <br /><br />
                        Vores motto er: “Vi hjælper hinanden for bedre at kunne hjælpe andre!”
                        <br /><br />
                        Det er et livsstilkoncept for det 21 århundrede – fremtiden! – Intet mindre! <br /><br />
                        Vi ved vi skal ændre på den måde vi lever på, og det skal være nu og det er vi helt indstillet på. Samtidig vil vi også gerne have indflydelse på hvad der skal ændres og hvordan, så vi når vores mål om et bedre liv og en bedre fremtid for os alle!
                        <br /><br />
                        “Klimatosser”? Måske, men det er ikke hoveddrivkraften – Det er sammenholdet om et bedre liv til os alle, derimod!
                        <br /><br />
                        Og så selvfølgelig, (under udvikling) Sammen kan vi købe billigere! Økologisk mad, supermarked, spise billigt, nemt, sundt og kost-rigtigt, (og evt. tabe sig!), vinde et hus for 100,00, tage lån, finansiering, tegne forsikringer, leje/låne en bolig, et sommerhus, købe og sælge, ferierejser m.v. og alt dette uden farer eller misbrug! Ja, finde nyt job, bijob, nye venner, partnere og lære nye ting, forbedre ens livsværd, dyrke motion og idræt, være med i klubbens aktiviteter (shows, parties, cocktails, games, yoga, kurser m.v.) og opleve nye spændende eventyr! Og ja, der bliver også mulighed for at “nød-overnatte”, i vores kommende klubhuse/kapitler over det ganske land! Og ved du hvad det allerbedste ved det her er? Det er at vi bestemmer helt selv!
                        <br /><br />
                        Hehe! Hvad venter du på? Der er virkelig meget vi skal nå! 😉
                        <br /><br />
                    </p>

                    <div className="row justify-content-center mt-5">
                        <Link to="/opretbruger">
                            <button type="button" className="btn btn-success btn-lg pl-4 pr-4" style={{ backgroundColor: '#008F91', borderColor: '#008F91' }} onClick={this.goToTheTopOfPage}>Bliv medlem</button>
                        </Link>
                    </div>

                    <h3 style={{ marginTop: '100px' }}>Læs mere om DeleVenner</h3>

                    <div className="row" style={{ marginTop: '65px' }}>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/medlemsfordele.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Medlemsfordele</h5>
                                    <p className="card-text">Læs om de fordele du får som medlem.</p>
                                    <Link to="/omdelevenner/medlemsfordele" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/kontingent.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Kontingent</h5>
                                    <p className="card-text">Hvad koster det at være medlem.</p>
                                    <Link to="/omdelevenner/hvadkosterdet" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/penge_brugt.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Hvad bliver pengene brugt til ?</h5>
                                    <p className="card-text">Læs om hvad pengene går til her.</p>
                                    <Link to="/omdelevenner/pengebrugt" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/visioner.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Visioner</h5>
                                    <p className="card-text">Læs om vores visioner her.</p>
                                    <Link to="/omdelevenner/visioner" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/kortsigtede_maal.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Kortsigtede mål</h5>
                                    <p className="card-text">Læs om vores kortsigtede mål her.</p>
                                    <Link to="/omdelevenner/kortsigtedemaal" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/langsigtede_maal.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Langsigtede mål</h5>
                                    <p className="card-text">Læs om vores langsigtede mål her.</p>
                                    <Link to="/omdelevenner/langsigtedemaal" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: '65px' }}>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/aktiviteter.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Aktiviteter</h5>
                                    <p className="card-text">Læs om vores aktiviteter her.</p>
                                    <Link to="/omdelevenner/aktiviteter" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/stotte_aktiviteter.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Støtte aktiviteter</h5>
                                    <p className="card-text">Læs om vores støtte aktiviteter her.</p>
                                    <Link to="/omdelevenner/staktiviteter" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" style={{ marginBottom: '30px' }}>
                            <div className="card">
                                <img className="card-img-top" src="/images/markedsplads.jpg" alt="" style={{ width: '100%' }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Markedsplads</h5>
                                    <p className="card-text">Læs om markedspladsen her.</p>
                                    <Link to="/omdelevenner/markedsplads" className="stretched-link" onClick={this.goToTheTopOfPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        );
    }
}

export default OmDeleVennerContent;