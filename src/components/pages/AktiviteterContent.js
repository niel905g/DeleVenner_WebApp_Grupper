import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AktiviteterContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Aktiviteter</h1>
                    <p style={{ fontSize: '18px' }}>
                        Vi har rigtigt mange ideer om hvilke aktiviteter vi skal tilbyde! Grundlæggende er vi dog mest interesseret i at få at vide hvilke aktiviteter du godt kunne tænke dig, at vi tilbyder – Så udfyld et spørgeskema og kom med dine forslag!<br /><br />
                        Aktiviteter vi allerede har tænkt på:
<ul>
                            <li>jobtilbud (en sektion der samler alle job portaler og hvor medlemmerne har mulighed for at kommentere/udveksle erfaringer om udbyderne, diskutere løn og hvorfor ikke? Vi er en lukket klub! m/CV-eksempler)</li>
                            <li>boligtilbud (en sektion med evt. de forskellige udbydere – men mest medlemmernes egne udbud; salg og leje – bofællesskab m.v.)</li>
                            <li>dele-mad indkøb (Rigtigt mange kan have fordel af at dele, når man køber ind. F.eks. et net løg, er meget for én person og kan sagtens deles.)</li>
                            <li>foredrag</li>
                            <li>fester</li>
                            <li>Dine Around (hhv. på restaurant og privat)</li>
                            <li>shows</li>
                            <li>koncerter</li>
                            <li>bingospil</li>
                            <li>lotteri</li>
                            <li>yoga</li>
                            <li>dans</li>
                            <li>motionsture – gå – løb – bike</li>
                            <li>eSports</li>
                            <li>Kurser:</li>
                            <ul><li>selvværd</li>
                                <li>selvforsvar</li>
                                <li>musik</li>
                                <li>billedkunstmaling m.v.</li>
                                <li>Fælleskøkken aktiviteter!</li>
                                <ul><li>madlavning</li>
                                    <li>bagning</li></ul></ul></ul>
                    </p>


                </div>
            </section>
        );
    }
}

export default AktiviteterContent;