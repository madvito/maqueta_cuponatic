import { useState, useContext } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ModalProvider, {ModalContext} from './context/ModalContext'
import './App.css';
import Filter from './pages/Filter';
import MapSearch from './pages/MapSearch';
import MovileSearch from './pages/MovileSearch';
import Order from './pages/Order';


function App() {
  const {modals} = useContext(ModalContext);
  // const [modals, setModals] = useState({
  //   order: false,
  //   filter: false
  // })
  let modal =''
  if(modals.order){
    modal = 'order';
  }
  if(modals.filter){
    modal = 'filter';
  }
  return (
    <Router>
      {/* <Order/> */}
      {
        modal =='order' && <Order/>
      }
      {
        modal =='filter' &&<Filter/>
      }
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
