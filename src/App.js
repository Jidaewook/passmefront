import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Privacy from './screen/Privacy';
import Terms from './screen/Terms';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/agreeterms" exact component={Terms} />
        <Route path="/privacy" exact component={Privacy} />

      </Switch>
    
    </Router>
  );
};

export default App;