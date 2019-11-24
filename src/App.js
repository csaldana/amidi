import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Index from "./Components/Index";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Index}  />
          {/*<Route path='/about' component={AboutUs}  />*/}
          {/*<Route path='/contact' component={Contact}  />*/}
          {/*<Route path='/cart' component={Cart}  />*/}
          {/*<Route path='/product/:id' component={ProductDetail}  />*/}
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
