import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './componets/header/Header';
import Home from './componets/home/Home';
import Cart from './componets/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './componets/product/DetailView';



function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />,
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product/:id' component={DetailView} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>

  )
}
