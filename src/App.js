import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router

import TestButton from './components/UI_Buttons_2/testButtons';

const App = () => {
  return (
    <Router> {/* Add a Router component here */}
      <div>
        <Routes>
          <Route path="/" element={<TestButton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
