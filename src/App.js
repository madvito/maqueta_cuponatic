import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MapSearch from './pages/MapSearch';
import MovileSearch from './pages/MovileSearch';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MovileSearch}/>
        <Route exact path='/map' component={MapSearch}/>
      </Switch>
    </Router>
  );
}

export default App;
