import "./App.css";
import Videos from "./Components/videos";
import Merch from "./Components/merch";
import Nav from "./Components/nav";
import ContactForm from "./Components/contactForm";
import Bio from "./Components/bio";
import Reflex from "./reflex.jpg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <main>
        <Nav />
        <nav id="navBar">
          <Switch>
            <Route exact path="/"></Route>
            <Route path="/Merch">
              <Merch />
            </Route>
            <Route path="/Videos">
              <Videos />
            </Route>
            <Route path="/Bio">
              <Bio />
            </Route>
            <Route path="/Contact">
              <ContactForm />
            </Route>
          </Switch>
        </nav>
        <div id="logoDiv">
          <img id="reflex" src={Reflex} alt="Reflex Billcam logo"></img>
        </div>
      </main>
    </div>
  );
}

export default App;
