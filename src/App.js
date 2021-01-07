import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

import SplashPage from './components/SplashPage';
import FoodMenu from './components/FoodMenu';
import DrinkMenu from './components/DrinkMenu';
import MerchMenu from './components/MerchMenu';

function App() {
  return (
    <main className='App'>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={SplashPage} />
        <Route path='/food' component={FoodMenu} />
        <Route path='/drinks' component={DrinkMenu} />
        <Route path='/merchandise' component={MerchMenu} />
      </Switch>
    </main>
  );
}

export default App;
