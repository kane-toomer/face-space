import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
