import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import FrontPageContent from './components/pages/FrontPageContent';
import FooterLarge from './components/FooterLarge';
import OmDeleVennerContent from './components/pages/OmDeleVennerContent';
import AktiviteterContent from './components/pages/AktiviteterContent';
import BetingelserContent from './components/pages/BetingelserContent';
import VisionerContent from './components/pages/VisionerContent';
import KortSigtedeMContent from './components/pages/KortSigtedeMContent';
import LangSigtedeMContent from './components/pages/LangSigtedeMContent';
import HvadKosterDetContent from './components/pages/HvadKosterDetContent';
import PengeBrugtContent from './components/pages/PengeBrugtContent';
import PrivatlivspolitikContent from './components/pages/PrivatlivspolitikContent';
import StAktiviteterContent from './components/pages/StAktiviteterContent';
import VedtaegterContent from './components/pages/VedtaegterContent';
import MarkedspContent from './components/pages/MarkedspContent';
import KontaktContent from './components/pages/KontaktContent';
import OpretBrugerContent from './components/pages/OpretBrugerContent';
import MedlFordContent from './components/pages/MedlFordContent';
import KreativAleneContent from './components/pages/KreativAleneContent';
import KreativeSamContent from './components/pages/KreativeSamContent';
import KreativeHverIsærContent from './components/pages/KreativeHverIsærContent';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={FrontPageContent} />
            <Route exact path="/omdelevenner" component={OmDeleVennerContent} />
            <Route path="/omdelevenner/aktiviteter" component={AktiviteterContent} />
            <Route path="/betingelser" component={BetingelserContent} />
            <Route path="/omdelevenner/visioner" component={VisionerContent} />
            <Route path="/omdelevenner/kortsigtedemaal" component={KortSigtedeMContent} />
            <Route path="/omdelevenner/langsigtedemaal" component={LangSigtedeMContent} />
            <Route path="/omdelevenner/hvadkosterdet" component={HvadKosterDetContent} />
            <Route path="/omdelevenner/pengebrugt" component={PengeBrugtContent} />
            <Route path="/privatlivspolitik" component={PrivatlivspolitikContent} />
            <Route path="/omdelevenner/staktiviteter" component={StAktiviteterContent} />
            <Route path="/vedtaegter" component={VedtaegterContent} />
            <Route path="/omdelevenner/markedsplads" component={MarkedspContent} />
            <Route path="/kontakt" component={KontaktContent} />
            <Route path="/opretbruger" component={OpretBrugerContent} />
            <Route path="/omdelevenner/medlemsfordele" component={MedlFordContent} />
            <Route path="/kreativalene" component={KreativAleneContent} />
            <Route path="/kreativesam" component={KreativeSamContent} />
            <Route path="/kreativehverisær" component={KreativeHverIsærContent} />
          </Switch>
          <FooterLarge />
        </div>
      </Router>
    );
  }
}

export default App;
