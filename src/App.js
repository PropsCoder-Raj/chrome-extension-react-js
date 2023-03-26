import { Route, Routes, Navigate,  } from 'react-router-dom';

import './App.css';
import PrivacyPolicyPageComponent from './pages/privacy-policy';
import WelcomePageComponent from './pages/welcome';

import {
  Router
} from 'react-chrome-extension-router';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <WelcomePageComponent />
        </Router>
        {/* <Routes>
          <Route path='/' element={<Navigate to="/welcome" />} />
          <Route path='/welcome' element={<WelcomePageComponent />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPageComponent />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
