import './App.css';
import HomePageComponent from './pages/home';
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
          <HomePageComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
