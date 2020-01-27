import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class KortSigtedeMContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Kortsigtede mål</h1>
                    <p style={{ fontSize: '18px' }}>
                        <ol><li>At få så mange som muligt til at blive medlemmer!</li><br />
                            <li>At skabe et grundlag for at medlemmerne kan være kreative alene eller sammen, til at starte en dele-økonomisk ide/gruppe, der som forretning kan hjælpe os allesammen</li><br />
                            <li>At skabe en Markedsplads hvor medlemmerne selv kan uploade de produkter og servicer de er interesseret i. Samtidig skal det også være muligt at forme en gruppe af medlemmer, der er interesseret i et given ting, så der er basis for hhv. at forhandle billigere priser, så vel som at finansiering! (Et minifee af transaktionerne vil gå til klubkassen)</li><br />
                            <li>At skabe rammen om en Gratis Version med reklamer!</li><br />
                            <li>At få klarlagt og organiseret de forskellige klubaktiviteter! (Her under vores velgørenheds aktiviteter).</li></ol>
                    </p>
                </div>
            </section>
        );
    }
}

export default KortSigtedeMContent;