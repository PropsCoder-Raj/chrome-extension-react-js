import './App.css';
import WelcomePageComponent from './pages/welcome';
import { Router } from 'react-chrome-extension-router';
import { Toaster } from 'react-hot-toast';
import SecurityAlert2PageComponent from './pages/security-alert-2';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Toaster position="bottom-center" />
        <Router>
          {/* <WelcomePageComponent /> */}
          <SecurityAlert2PageComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
