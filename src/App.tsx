import { AppContextProvider } from './utils/appContext';

import JDWidget from './components/JDWidget';

function App() {
  return (
    <AppContextProvider>
      <div>
        <JDWidget />
      </div>
    </AppContextProvider>
  );
}

export default App;
