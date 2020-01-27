import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VisionerContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Visioner</h1>
                    <p style={{ fontSize: '18px' }}>
                        Visionen her, er at samle rigtigt mange gode mennesker, på tværs af folkefærd og landeskel. Hundredvis, tusindvis, millionvis! – og mere!<br />
                        I et samarbejde om at skabe det gode liv for os alle!<br />
                        Hvordan skulle det så gøres? – Svaret er: Sammen – hver for sig!<br />
                        Alt koster penge. Og ikke alle i samme aldersgruppe er nået lige langt. Det kan være et spørgsmål om prioritet, held eller uheld. Men en ting er sikkert, der skal være plads til os allesammen!<br />
                        Når nu alt koster penge, så har vi i hvert tilfælde mindst det, tilfælles! Så det må være udgangspunktet. – Vi vil også helst betale mindst muligt for de ting vi køber og få mest muligt ud af det.<br />
                        Med det i tankerne må det være nærliggende at vi skaber et system med forskellige redskaber til at vi, som gruppe, kan få mest muligt for mindst muligt! Klimakorrekt! Og samtidigt hjælpe andre mennesker.<br /><br />
                    </p>
                </div>
            </section>
        );
    }
}

export default VisionerContent;