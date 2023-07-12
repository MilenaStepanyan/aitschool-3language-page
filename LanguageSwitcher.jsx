import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => toggleLanguage('hy')}>Armenian</button>
      <button onClick={() => toggleLanguage('en')}>English</button>
      <button onClick={() => toggleLanguage('fr')}>French</button>
    </div>
  );
}

export default LanguageSwitcher;
