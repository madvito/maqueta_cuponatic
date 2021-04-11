import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Filter from './pages/Filter';
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
        <Route exact path='/filter' component={Filter}/>
      </Switch>
    </Router>
  );
}

export default App;
