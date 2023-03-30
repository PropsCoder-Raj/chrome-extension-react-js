import './App.css';
import WelcomePageComponent from './pages/welcome';
import { Router } from 'react-chrome-extension-router';
import { Toaster } from 'react-hot-toast';
import RecoveryPage2Component from './pages/recovery-page3';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Toaster position="bottom-center" />
        <Router>
          {/* <WelcomePageComponent /> */}
          <RecoveryPage2Component />
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
