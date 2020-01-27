import React, { Component } from 'react';

class KreativeHverIsærContent extends Component {
    getStyle = () => {
        return {
            background: '#f6f6f6'
        }
    }
    render() {
        return (
            <section style={this.getStyle()}>
                
                <div style={{margin: 'auto', width: '70%', background:  '#D3D3D3', padding: '9px' }}>  <br />
                    <h1 className="text-center" style={{ marginBottom: '20px' }}>Købe ind sammen til hver især!</h1>
                    <p style={{fontSize: '18px', marginBottom: '0px' }}>
                    Denne mulighed er til den eller dem der ønsker at drage fordel af at få mængde rabat! Flere adminstratorer kan oprettes, såvel som både følgere og medlemmer kan betale pr. måned, eller enkelt beløb. Flere muligheder og opsætning så vel som banner reklamer, i gruppen.
                        <br /><br />
                    </p>
                    </div>
               
            </section>
        );
    }
}


export default KreativeHverIsærContent;