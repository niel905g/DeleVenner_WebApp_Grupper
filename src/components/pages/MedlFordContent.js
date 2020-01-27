import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MedlFordContent extends Component {

    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginBottom: '100px' }}>
                    <Link to="/omdelevenner">
                        <i className="material-icons mt-2" style={{ fontSize: '46px', color: 'black' }}>arrow_back</i>
                    </Link>
                    <h1 className="text-center" style={{ marginTop: '54px', marginBottom: '100px' }}>Medlemsfordele</h1>
                    <p className="text-center" style={{ fontSize: '18px' }}>
                        <b className='text-center'>Sikkerhed og Tryghed!</b>
                    </p>
                    <p style={{ fontSize: '18px' }}>
                        Der er mange fordele ved at være medlem! De umiddelbare er sikkerhed og tryghed på nettet. At kunne købe og sælge til DeleVennerne uden farer eller i det mindste med så reducerede risikoer, som det nu er muligt! Alle er registerede, alle har interesse i at alt går rigtigt til og til alles bedste! Foruden selvfølgelig; (under udvikling) Sammen kan vi købe billigere, øko-mad, supermarked, spise billigt, nemt, sundt og kost-rigtigt, (og evt. tabe sig!), vinde et hus for 100,00, tage lån, finansiering, tegne forsikringer, leje/låne en bolig, et sommerhus, købe og sælge, ferierejser m.v. og alt dette uden farer eller misbrug! Ja, finde nyt job, bijob, nye venner, partnere og lære nye ting, forbedre ens livsværd, dyrke motion og idræt, være med i klubbens aktiviteter (shows, parties, cocktails, games, yoga, kurser m.v.) Opleve nye spændende eventyr!
                    </p>
                </div>
            </section >
        );
    }
}

export default MedlFordContent;