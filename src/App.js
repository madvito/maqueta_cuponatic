import { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ModalContext} from './context/ModalContext'
import './style.css';
import Filter from './pages/Filter';
import MapSearch from './pages/MapSearch';
import MobileSearch from './pages/MobileSearch';
import Order from './pages/Order';


function App() {
  const {modals} = useContext(ModalContext);
  
  let modal =''
  if(modals.order){
    modal = 'order';
  }
  if(modals.filter){
    modal = 'filter';
  }
  return (
    <Router>
      {
        modal ==='order' && <Order/>
      }
      {
        modal ==='filter' &&<Filter/>
      }
      <Switch>
        <Route exact path='/' component={MobileSearch}/>
        <Route exact path='/map' component={MapSearch}/>
        <Route exact path='/order' component={Order}/>
        <Route exact path='/filter' component={Filter}/>
      </Switch>
    </Router>
  );
}

export default App;
