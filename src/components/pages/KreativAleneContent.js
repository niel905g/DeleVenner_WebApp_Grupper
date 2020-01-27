import React, { Component } from 'react';

class KreativAleneContent extends Component {
    getStyle = () => {
        return {
            background: '#f6f6f6'
        }
    }
    render() {
        return (
            <section style={this.getStyle()}>
                
                <div style={{margin: 'auto', width: '70%', background:  '#D3D3D3', padding: '9px' }}>  <br />
                    <h1 className="text-center" style={{ marginBottom: '20px' }}>Være kreativ alene</h1>
                    <p style={{fontSize: '18px', marginBottom: '0px' }}>Denne mulighed vil typisk være den bedste løsning hvis du ønsker at skabe et eller andet, et navn for dig selv, en bog, et kunstværk eller du er alene om at undervise, bygge eller reparere f.eks. en båd, bil eller andet, og gerne vil vise dine "gør-det-selv" færdigheder her. Måske som  youtube video'er eller billeder og beskrivelser. (Evt. vil du afprøve dine ting her først, inden du bevæger dig ud på youtube universet!) Så kan du gøre det og bede om økonomisk støtte/betaling fra dine "følgere/fans/lejere - eller hvad du ønsker at kalde dem, imod at give dem adgang til dine videoer, billeder og/eller beskrivelser. Alt efter hvor meget de betaler pr. måned eller enkelt beløb. Du bestemmer! F.eks. en forfatter kan lægge et nyt kapitel op fra vedkommendes nye bog, en gang om ugen, og dem der betaler et "månedlig abonnement X" får adgang til at læse det! Dem der betaler f.eks. X + Y, får måske også lov til at downloade hele bogen, når den er færdig! Og, evt. dem der betaler X + Y + Z kan også blive nævnt som sponsor i Forordet, eller for X+Y+Z+Æ; Få lov til at komme med forslag til bogens handling/afslutning, f.eks. for en krimi; Hvem er morderen? etc. Du bestemmer!
                        <br /><br />
                    </p>
                    </div>
               
            </section>
        );
    }
}// eslint-disable-next-line
const fstSecStyle = { 
    background:  '#D3D3D3' //'#9F9C99'
}

export default KreativAleneContent;