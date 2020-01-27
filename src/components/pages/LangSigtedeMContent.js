import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LangSigtedeMContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Langsigtede mål</h1>
                    <p style={{ fontSize: '18px' }}>
                        <ul><li>Få gjort DeleVenner klubben til en fuldgyldig "Business & Tax Host" for nystartede ide-grupper, med revisor & advokat vejl.</li><br />
                            <li>At få opbygget klubben med “kapitler”/"bobler" i enhver lidt større by i Danmark. Der skal købes (alt. lejes/leases) ejendomme, helst i centrum, hvor de skal indrettes med hhv. reception, depotrum, fælleskøkken, bibliotek, 'gameroom', opholdsstue, bio, aktivitetsrum, (gårdhave-hvis muligt) og soveafsnit.</li>< br />
                            <li>Oprette vores eget kredit/betalingskort eller system!</li></ul>< br />
                    </p>
                </div>
            </section>
        );
    }
}

export default LangSigtedeMContent;