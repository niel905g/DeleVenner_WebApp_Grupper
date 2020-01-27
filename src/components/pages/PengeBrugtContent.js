import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PengeBrugtContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Hvad bliver pengene brugt til?</h1>
                    <p style={{ fontSize: '18px' }}>
                        <b>Kontingenter, støttebidrag og overskud fra klub aktiviteter</b><br />
                        Betaler vores regninger… Dem har vi jo alle. Der ud over så er:<br />
                        DeleVenner er en almen velgørenhedsforening og som sådan bliver de penge vi samler ind brugt til forskellige velgørende formål. Vi har kortsigtede og langsigtede mål. (Læs mere i Visioner)<br />
                        Vi støtter blandt andet op om de frivillige madspilds-aktiviteter, som Uffe og Klaus udfører i København. Det brugbare/spiselige mad fra supermarkedernes affaldscontainere uddeles til værdigt trængende, enlige og børnefamilier.<br />
                        Når det er muligt, åbner Uffe & Klaus også Fælleskøkkenet, hvor der serveres til alle der er sultne!<br /><br />
                        Lige nu er vi ved at “spare op” til at kunne købe nogle brugte små campingvogne hvorfra vi kan servere varm suppe – når den kolde tid kommer. – Hvis du har “hænderne skruet rigtigt på” og har lyst til at være med, så har vi brug for din hjælp, til at gøre campingvognene klar! Ja, også det mobile Fælleskøkken!<br /><br />
                    </p>
                </div>
            </section>
        );
    }
}

export default PengeBrugtContent;