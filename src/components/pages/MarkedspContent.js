import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MarkedspContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Markedsplads</h1>
                    <p style={{ fontSize: '18px' }}>
                        Vores markedsplads bliver ikke som de andres markedspladser! Selvfølgelig skal vi også have en traditionel køb/salg sektion af nyt og gammelt med fotos mv., men der hvor vi vil adskille os, er ved at kunne forme dele-økonomiske grupper hvor vores markedsplads bliver en standard “outlet” for disse grupper. Vi ønsker også at kunne give købere og sælgere en garanti for hhv. Modtagelse af vare, hhv. Modtagelse af betaling. (Under udvikling!)<br />
                        Det kan f.eks. være 10 naboer der ønsker at købe én traktor plæneklipper de deles om.<br />
                        Eller f.eks. 80 personer beslutter sig til at købe den nye VW (en eller anden model) til f.eks Dkr 200.000,00. Ved køb at 80 stk på en gang er der nok en god rabat og/eller mere udstyr/gratis levering! En købsaftale om levering af en bil pr måned, så hver enkelt kun skal betale en pris svarende til Dkr 2.500,00 pr måned, indtil ens bil er betalt, giver gratis finansiering! Det kaldes et Konsortium og er helt afgjort den billigste måde at købe bil på! Så kan man lave en liste over hvem der skal have den første bil, den anden, osv. eller bestemte ved lodtrækning!<br />
                        Dette system kan bruges til at købe alt muligt!<br />
                        Vi skal også have et Kupon Marked med “special deals” der bliver udbudt til alle medlemmer. F.eks. Kupon til Tirsdags Pizza, 2 pizzas for prisen af 1! Osv.<br /><br />
                    </p>
                </div>
            </section>
        );
    }
}

export default MarkedspContent;