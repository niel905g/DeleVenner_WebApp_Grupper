import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function OpretBrugerContent() {

    let history = useHistory();

    function goToTheTopOfPage() {
        window.scrollTo(0, 0);
    }

    let state = {
        fullname: '',
        email: '',
        password: '',
    }

    let handleFullnameChange = (event) => {
        state.fullname = event.target.value;
    }

    let handleEmailChange = (event) => {
        state.email = event.target.value;
    }

    let handlePasswordChange = (event) => {
        state.password = event.target.value;
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            fullname: state.fullname,
            email: state.email,
            password: state.password
        };

        axios.post(`http://localhost:3001/api/users/createuser`, user)
            .then(res => {
                
                if (res.data === "OK") {
                    history.push("/");
                }
                
            })
    }


    return (
        <section>
            <div style={{ margin: 'auto', width: '70%', marginTop: '100px', marginBottom: '100px' }}>
                <h1 className="text-center" style={{ marginBottom: '100px' }}>Opret bruger</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" name="fullname" onChange={handleFullnameChange} placeholder="Indtast dit fulde navn"></input>
                    </div>
                    <div className="form-group mt-4">
                        <input type="email" className="form-control form-control-lg" name="email" onChange={handleEmailChange} placeholder="Indtast din e-mail"></input>
                    </div>
                    <div className="form-group mt-4">
                        <input type="password" className="form-control form-control-lg" name="password" onChange={handlePasswordChange} placeholder="Vælg dit kodeord"></input>
                    </div>
                    <button type="submit" className="btn btn-success btn-lg btn-block mt-4" style={{ backgroundColor: '#008F91', borderColor: '#008F91' }}>Opret bruger</button>
                    <p className="text-center mt-4">Ved oprettelse af bruger, accepterer du automatisk vores <Link to="/betingelser" onClick={goToTheTopOfPage} >Betingelser</Link> og <Link to="/privatlivspolitik" onClick={goToTheTopOfPage}>Privatlivspolitik</Link>.</p>
                </form>
            </div>
        </section>
    );

}

export default OpretBrugerContent;