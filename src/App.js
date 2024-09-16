import './index.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './Home';
import Navbar from './nav';
import About from './about';
import RContact from './Rcontact';
import Footer from './footer';
import Courses from './courses';
import NotFound from './404';
import MyBase from './database';
import Detail from './db';
import { useState } from 'react';
function App() {
  const [isPending, setIsPending] = useState(true);
  setTimeout(()=>{
      setIsPending(false);
    },1000)
  return (
    <div>
    {!isPending && <Router>
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
          <Route path="/RContact">
            <RContact/>
          </Route>
          <Route path='/database'>
            <MyBase/>
          </Route>
          <Route path='/info/:id'>
            <Detail/>
          </Route>
          <Route path="*">
          <NotFound />
          </Route>
        </Switch>
        </div>  
        <Footer/>
    </div>
    </Router>}
    {isPending && <div className='text-center mt-4'>Loading...</div>}
    </div>
  );
}

export default App;
