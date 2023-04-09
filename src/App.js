import './App.css';
import FAQsPageComponent from './pages/faqs';
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
          <FAQsPageComponent />
        </Router>
      </div>
    </div>
  );
}

export default App;
