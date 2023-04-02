import './App.css';
import SeedPhasePageComponent from './pages/seed-phase';
import WelcomePageComponent from './pages/welcome';
import { Router } from 'react-chrome-extension-router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Toaster position="bottom-center" />
        <Router>
          {/* <WelcomePageComponent /> */}
          <SeedPhasePageComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
