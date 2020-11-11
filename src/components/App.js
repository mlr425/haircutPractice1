import React from 'react';
// import Navbar from './Navbar';
// import About from './About';
// import Locations from './Locations';
// import ContactUs from './ContactUs';
// import Home from './Home';
import '../css/App.css';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Locations from '../components/Locations';
import ContactUs from '../components/ContactUs';
import Home from '../components/Home';





import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Locations' component={Locations} />
          <Route path='/ContactUs' component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
