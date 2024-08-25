import './index.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './Home';
import Navbar from './nav';
import About from './about';
import Login from './login';
import Footer from './footer';
import Courses from './courses';
import NotFound from './404';
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
          <Route path="/courses">
          <Courses />
          </Route>
          <Route path="*">
          <NotFound />
          </Route>
        </Switch>
        </div>  
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
