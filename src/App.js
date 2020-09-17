import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.module.scss';

import FeedbackForm from './components/feedback-form/feedback-form.component';
import Success from './components/success/success.component';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
              <Route path="/" exact component={FeedbackForm} />
              <Route path="/success" exact component={Success} />
        </Switch>
      </Router>
    );
  }
}


export default App;
