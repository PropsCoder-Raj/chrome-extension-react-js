import './App.css';
import HistoryPageComponent from './pages/history';
import QrCodeComponent from './pages/qr-code';
import SendToAddressComponent from './pages/sendToAddress';
import TabsMainModuleComponent from './pages/tabs';
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
          <SendToAddressComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
