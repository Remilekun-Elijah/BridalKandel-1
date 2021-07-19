import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Services from './services/Services';
import login from './authentication/login';
import NotFound from './common/NotFound';
import NetworkDetector from './middleware/NetworkDetector';
import register from './authentication/register'




const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={NetworkDetector(Homepage)} />
        <Route exact path="/services" component={NetworkDetector(Services)} />
        <Route exact path="/login" component={NetworkDetector(login)} />
        <Route exact path="/register" component={NetworkDetector(register)} />

        <Route component={NetworkDetector(NotFound)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
