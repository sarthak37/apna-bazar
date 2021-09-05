import Header from './components/header/Header';
import Home from './components/Home/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
      <TemplateProvider>
        <ContextProvider>
        <BrowserRouter>
        <Header />
        <Switch>
      <Route exact path = '/' component={Home} />
      <Route exact path = '/cart' component={Cart} />
    </Switch>
    </BrowserRouter>
    </ContextProvider>
    </TemplateProvider>
   
  );
}


export default App;
