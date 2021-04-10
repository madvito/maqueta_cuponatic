import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MapSearch from './pages/MapSearch';
import MovileSearch from './pages/MovileSearch';
import Order from './pages/Order';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MovileSearch}/>
        <Route exact path='/map' component={MapSearch}/>
        <Route exact path='/order' component={Order}/>
      </Switch>
    </Router>
  );
}

export default App;
