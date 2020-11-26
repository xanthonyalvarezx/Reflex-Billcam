import "./App.css";
import Videos from "./Components/videos";
import Merch from "./Components/merch";
import Nav from "./Components/nav";
import ContactForm from "./Components/contactForm";
import Bio from "./Components/bio";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Nav />
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
      </>
    </div>
  );
}

export default App;
