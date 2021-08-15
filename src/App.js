import Navigator from "./Views/Navigator";
import Home from './Views/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddCharacter from "./Views/AddCharacter";
import Characters from "./Views/Characters";
import About from "./Views/About";
import CharacterInfo from "./Views/CharacterInfo";
import NotFound from "./Views/NotFound";



function App() {
  return (
    <Router>
      <div >
        <Navigator/> 
        <div className="homePage ">
          <Switch>
            <Route exact path="/" >
              <Home />   
            </Route>

            <Route path="/addcharacter">
              <AddCharacter/>   
            </Route>

            <Route exact path="/characters">
              <Characters/>   
            </Route>

            <Route exact path="/characters/:id">
              <CharacterInfo/>   
            </Route>

            <Route path="/about">
              <About/>   
            </Route>

            <Route path="*">
              <NotFound/> 
            </Route>
          </Switch>
        </div>           
      </div>
    </Router>
    
  );
}

export default App;
