import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Routes from './routes/routes'

function App() {
  return <Route path='/' component={Routes} />
}

export default App;
