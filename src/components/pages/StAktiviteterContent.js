import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StAktiviteterContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Støtte aktiviteter</h1>
                    <p style={{ fontSize: '18px' }}>
                        Her kan nævnes 2 af vores medlemmer, Uffe og Klaus, som allerede er i gang med at “skralde” og uddele det fundne til værdigt trængende. Det er frivilligt arbejde. – (Vi håber på snart at kunne, i det mindste, dække deres transportudgifter, når der begynder at komme lidt penge i kassen).<br />
                        Vi har også kig på en lille campingvogn, der egner sig til at blive omdannet til en “Suppe Vogn”.<br />
                        Vi vil også gerne lave en gammel bus om til transport/værested for hjemløse.<br />
                        Samt skabe bosteder for hjemløse.<br />
                        Fælleskøkkenet er en anden del, som vi også gerne ville kunne åbne for alle, noget oftere end vi kan nu.
                    </p>
                </div>
            </section>
        );
    }
}

export default StAktiviteterContent;