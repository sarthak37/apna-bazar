import Header from './components/header/Header';
import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/cart' component={Cart} />
    <Home />
    </Switch>
    </BrowserRouter>
      
    </div>
  );
}


export default App;
