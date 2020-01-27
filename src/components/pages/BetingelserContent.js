import React, { Component } from 'react';

class BetingelserContent extends Component {
    render() {
        return (
            <section>
                <div style={{ margin: 'auto', width: '70%', marginTop: '100px' }}>
                    <h1 className="text-center" style={{ marginBottom: '100px' }}>Betingelser og Vilkår</h1>
                    <p style={{ fontSize: '18px', marginBottom: '100px' }}>
                        Ved oprettelse af en bruger, via "Opret bruger" aksepterer du de nedenstående betingelser og vilkår, som du selvfølgelig har læst inden oprettelsen!<br />
                        Kort forklaret, så melder du dig ind i DeleVenner foreningen når du opretter en bruger. Du bliver automatisk oprettet med gratis versionen. Du kan til enhver tid melde dig ud, med øjeblikkelig virkning. Som medlem med gratis versionen, aksepterer du at se reklamer. Du kan til enhver tid betale kontingent og gå over til premium versionen uden reklamer. Resten finder vi ud af! – Til at begynde med kommer alle medlemmer, både dem med gratis versionen og dem med den betalte premium version, til at modtage flere forskellige mails, nyheds breve, etc. indtil vi får “styr på kanonen”. Da vi selv hader at blive spammet, skal vi nok begrænse det til det mindst mulige, hurtigst muligt, samt give dig en mulighed for at sige fra, for de ting der ikke interesserer dig… (Vi skal bare lige have fundet ud af det hele, først!)<br />
                        Ved oprettelse af en bruger via "Bliv Medlem" knappen, vælger du premium versionen, der giver adgang til det hele. Års kontingentet betales ved indmelding (når betalingsmodulet er klar). Du kan vælge at kontingentet bliver automatisk opkrævet/trukket fra din konto.<br /> Ved udmelding af foreningen betales der ikke noget tilbage, for f.eks. resterende måneder.<br />
                        Man kan til enhver tid udmelde sig! Enten skriftligt til: info@delevenner.dk eller via hjemmesiden eller appen (under udvikling) med øjeblikkelig virkning (måneden ud).<br />
                        Ved valg af Freemium versionen med reklamer, (under udvikling) gælder samme regler.<br />
                        Ved manglende årsbetaling af kontingent gives der løbende måned som betalingsfrist, herefter bliver man automatisk overført til Freemium versionen. Skulle man ikke heller opnå de minimum Dkr 100,00 i form af sete reklamer/vundne points, indenfor løbende år, bliver man automatisk udmeldt og slettet i vores database/medlemsliste. Man kan til enhver tid blive overført/tilbageført til Premiums versionen ved at betale kontingent.<br /><br />
                    </p>

                </div>
            </section>
        );
    }
}

export default BetingelserContent;