import './App.css';
import React  from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import getClientes from './clients'

function App() {
  return (
    <BrowserRouter>
     <Switch>
      <Route path="/" component={getClientes} exact />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
