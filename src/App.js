import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from './screens/SignIn';
import Register from './screens/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
