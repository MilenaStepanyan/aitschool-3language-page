import React from 'react';
import WholePage from './WholePage';
import { LanguageProvider } from './LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <WholePage />
    </LanguageProvider>
  );
}

export default App;
