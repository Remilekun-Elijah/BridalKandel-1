import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './homepage/Homepage';
import Services from './services/Services';
import Index from './authentication/Index';
import ResetPassword from './authentication/ResetPassword';
import NotFound from './common/NotFound';
import NetworkDetector from './middleware/NetworkDetector';
import AuthenticatedUser from './middleware/AuthenticatedUser';




const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={NetworkDetector(Homepage)} />
        <Route exact path="/services" component={NetworkDetector(Services)} />
        <Route exact path="/authentication" component={NetworkDetector(Index)} />
        <Route exact path="/reset-password" component={NetworkDetector(ResetPassword)} />
        <Route component={NetworkDetector(NotFound)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
