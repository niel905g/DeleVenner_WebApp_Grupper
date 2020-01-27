import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FrontPageContent extends Component {
    
    getStyle = () => {
        return {
            background: '#f6f6f6'
        }
    }

    goToTheTopOfPage() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section style={this.getStyle()}>

                <div style={{ margin: 'auto', width: '70%', marginTop: '0px'}}><br /><br />
                    <h1 className="text-center">Velkommen til DeleVenner!</h1>
                    <p className="mt-5" style={{ fontSize: '18px' }}>
                        Vi er en livsstilskoncept klub og almen velgørenheds forening med mottoet: "Vi hjælper hinanden for bedre at kunne hjælpe andre!"
                        <br /><br />
                        Vores fokus er på deleøkonomi. Vi vil gerne være med til at formindske presset på jordens resurser samt CO2 aftrykket.
                        <br /><br />
                        Har du en ide? Så kan du oprette en gruppe her.
                        <br /><br />
                        Hvad du vil lave er fuldstændig op til dig selv.
                        <br />
                        Skrive en bog? Bygge eller istandsætte en båd? Undervise i et eller andet? Eller være med i en gruppe der er interesseret i at købe en ting sammen, og deles om den?
                        <br />
                        Eller f.eks. købe en bil til hver især, for at få en mængde rabat og/eller andre fordele? (Deleøkonomi finansiering uden renter!). Alt kan købes på denne måde!
                    </p>
                    <div className="row justify-content-center mt-5">
                        <Link to="/opretbruger">
                            <button type="button" className="btn btn-success btn-lg pl-4 pr-4" style={{ backgroundColor: '#008F91', borderColor: '#008F91' }} onClick={this.goToTheTopOfPage}>Bliv medlem</button>
                        </Link>
                    </div> 

                    <h1 className="text-center" style={{ marginTop: '100px' }}>Hos os kan du:</h1>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div style={fstSecStyle} className="col-lg-4">
                            <img className="rounded mx-auto d-block" src="/images/gig.PNG" alt="" width="136" style={{ marginTop: '50px'}} />
                            <h3 className="text-center font-weight-bold mt-5">Være kreativ alene!</h3>
                            <p className="text-center mt-5" style={{ fontSize: '18px' }}>Opret en gruppe af følgere og sponsorer!</p>
                            <p className="text-center mt-3 font-weight-bold" style={{ fontSize: '24px' }} ><Link to="/kreativalene" onClick={this.goToTheTopOfPage}> Læs mere</Link></p> </div>
                        
                        <div style={fstSecStyle} className="col-lg-4">
                            <img className="rounded mx-auto d-block" src="/images/SammenDeleV.png" alt="" width="203" style={{ marginTop: '50px' }} />
                            <h3 className="text-center font-weight-bold mt-5">Være kreative sammen!</h3>
                            <p className="text-center mt-5" style={{ fontSize: '18px' }}>Opret en gruppe der deles om at købe og have en ting sammen!</p>
                            <p className="text-center mt-4 font-weight-bold" style={{ fontSize: '24px' }}><Link to="/kreativesam" onClick={this.goToTheTopOfPage}> Læs mere</Link></p>
                        </div>
                        <div style={fstSecStyle} className="col-lg-4" >
                            <img className="rounded mx-auto d-block" src="/images/siluetter.PNG" alt="" width="153" style={{ marginTop: '50px' }} />
                            <h3 className="text-center font-weight-bold mt-5">Købe ind sammen til hver især!</h3>
                            <p className="text-center mt-5" style={{ fontSize: '18px'}}>Opret et konsortium til at købe en ting til hver sammen, billigt og rentefrit!</p>
                            <p className="text-center mt-4 font-weight-bold" style={{ fontSize: '24px' }}><Link to="/kreativehverisær" onClick={this.goToTheTopOfPage}> Læs mere</Link></p>
                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
}
const fstSecStyle = {
    background:  '#D3D3D3' //'#9F9C99'
}

export default FrontPageContent;