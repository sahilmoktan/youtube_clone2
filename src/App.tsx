// App.tsx
import React from 'react';
import { AppContextProvider } from './context/contextApi';
import YoutubeMain from './components/YoutubeMain'; // Adjust the path based on your file structure

const App = () => {
  return (
    <AppContextProvider>
      <YoutubeMain />
    </AppContextProvider>
  );
};

export default App;
