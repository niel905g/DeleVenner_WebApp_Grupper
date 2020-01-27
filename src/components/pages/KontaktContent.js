import React, { Component } from 'react';
import axios from 'axios';

class KontaktContent extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

        handleChange = e => {
            this.setState( { [e.target.name]: e.target.value })
        }

        async handleSubmit(e) {
          e.preventDefault()
          
          const { name, email, message } = this.state
          // eslint-disable-next-line
          const form = await axios.post('http://localhost:3001/api/form', {
            name,
            email,
            message
          })
        }

    render() {
        return (
           // <section>
            <form onSubmit={this.handleSubmit} >
                    <div style={{ margin: 'auto', width: '70%', marginTop: '100px' }}>
                        <h1 className="text-center">Kontakt</h1>
                        <p className="mt-5" style={{ fontSize: '18px' }}>

                            Erik Ruhmanis<br />
                            E-Mail: erik@delevenner.dk<br /> <br />

                            Niels Bo Dissing<br />
                            E-Mail: nielsbd@delevenner.dk<br />
                            <br /></p>
                            
                        <div>
                            Til:<br />
                            Alm. info samt DPO (Data Protection Officer)<br />
                            E-Mail: info@delevenner.dk<br />
                            Fra:<br />
                        </div>
                        <div className="form-group">
                            <label className="my-0" >Dit navn:</label>
                            <input
                                type="text"
                                className="bg-light text-dark form-control" 
                                //id="name"
                                name="name"
                                placeholder="Dit navn"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="my-0" >Din e-mail adresse:</label>
                            <input
                                type="text"
                                className="bg-light text-dark form-control" 
                                //id="email"
                                name="email"
                                placeholder="Din e-mail adresse"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="my-0" >Din besked:</label>
                            <textarea
                                className="bg-light text-dark form-control" rows="10"
                                //id="message"
                                name="message"
                                placeholder="Din besked"
                                onChange={this.handleChange} />
                            <input 
                                href="#"
                                type='submit'
                                className="btn btn-success mt-4"
                                style={{ backgroundColor: '#008F91', borderColor: '#008F91' }}
                                value='Send'
                            /><br /><br />
                        </div>
                        </div>
                </form>
          //  </section>
        )
    }
}

export default KontaktContent;