import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
// import { TemplateProvider } from './templates/templateProvider';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
