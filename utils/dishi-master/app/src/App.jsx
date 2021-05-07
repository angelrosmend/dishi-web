import Header from './components/Header/Header';
import { ContextDataProvider } from './context/DataContext';
import { ContextUserProvider } from './context/UserContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <ContextUserProvider>
    <ContextDataProvider>
          <div className="fit-screen">
              <Header/>
              <Home/>
          </div>
    </ContextDataProvider>
    </ContextUserProvider>
  );
}

export default App;
