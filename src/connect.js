import Feed from './Feed';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/feed" component={Feed} />
          
        </Switch>
      
      </div>
    </Router>
  );

}

export default App;
