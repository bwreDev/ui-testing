import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

import SplashPage from './components/SplashPage';
import FoodMenu from './components/FoodMenu';

function App() {
  return (
    <main className='App'>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={SplashPage} />
        <Route path='/food' component={FoodMenu} />
      </Switch>
    </main>
  );
}

export default App;
