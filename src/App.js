import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import SignIn from './screens/SignIn';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import NavigationBar from './navigation/navigation';

function App() {

  return (
    <Router>
      <main>
        <Routes>
            <Route exact path='/' element={<SignIn />} />
            <Route exact path='/register' element={<Register />} />
            <Route element={<NavigationBar/>}>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/settings' element={<Settings />} />
            </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
