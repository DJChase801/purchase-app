// src/App.js

import React from 'react';
import LoginPage from './routes/login';
import { Provider } from 'mobx-react';
import { AppStore } from './stores/app.store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './routes/home';


const App = () => {
  return (
    <Provider appStore={AppStore}>
      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} />
          <Route path="/home" Component={MainPage} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

