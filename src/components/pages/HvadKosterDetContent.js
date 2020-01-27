import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HvadKosterDetContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Hvad koster det?</h1>
                    <p style={{ fontSize: '18px' }}>
                        <b> Års Kontingent for at være medlem er Dkr: 100,00.</b><br />
                        Eller vælg vores Freemium Version, der er <b>gratis</b> mod at du ser reklamer, og indsamler points, indtil de samme Dkr 100,00 er nået! – Vi håber du syntes det er så sjovt at “skrabe” de daglige tilsendte skrabelod med chance for at vinde points (der også kan bruges til at betale for klubaktiviteter) at du fortsætter! – Ved Premium Versionen (Betalt kontingent!) kan man også “skrabe lodder” og vinde points, hvis og når man har lyst. Ved gratis versionen er det obligatorisk først at “skrabe”, ellers kan man ikke logge ind. (under udvikling!)<br />
                        Kontingent betales ved indmelding og bliver så automatisk opkrævet/trukket fra din konto (hvis du vælger det) én gang om året. Ved udmelding betales der ikke noget tilbage, for f.eks. resterende måneder.<br />
                        Man kan til enhver tid udmelde sig! Enten skriftligt til: info@delevenner.dk eller via hjemmesiden/appen (under udvikling) med løbende måneds varsel.<br />
                        Ved valg af Freemium versionen med reklamer, (under udvikling) "Opret bruger" gælder samme regler.
                    </p>
                </div>
            </section>
        );
    }
}

export default HvadKosterDetContent;