import './index.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './Home';
import Navbar from './nav';
import About from './about';
import Login from './login';
import Footer from './footer';
import Contact from './contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route>
            <Login />
          </Route>
        </Switch>
        </div>  
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
