import './App.css';
import WelcomePageComponent from './pages/welcome';
import { Router } from 'react-chrome-extension-router';
import { Toaster } from 'react-hot-toast';
import SeedPhasePageComponent from './pages/seed-phase';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Toaster position="bottom-center" />
        <Router>
          {/* <WelcomePageComponent /> */}
          <SeedPhasePageComponent />
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
