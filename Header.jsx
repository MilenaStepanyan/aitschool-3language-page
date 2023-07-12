import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { useLanguage } from '../LanguageContext';

function Header() {
  const { switchLanguage } = useContext(LanguageContext);
  const { language } = useLanguage();

  const handleLanguageSwitch = (newLanguage) => {
    switchLanguage(newLanguage);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img
              src="https://aitschool.am/images/Ait-Logo.svg"
              alt="AIT School Logo"
            />
          </div>
          <div className="navbar">
            <ul className="nav-list">
            {language === 'am' && <li className="nav-item">Գլխավոր</li>}
            {language === 'en' &&  <li className="nav-item">Home</li>}
            {language === 'ru' &&  <li className="nav-item">Основной</li>}

            {language === 'am' && <li className="nav-item">Դասընթացներ</li>}
            {language === 'en' &&  <li className="nav-item">Lessons</li>}
            {language === 'ru' &&  <li className="nav-item">Курсы</li>}
              
            {language === 'am' && <li className="nav-item">Գրանցում</li>}
            {language === 'en' &&  <li className="nav-item">Registration</li>}
            {language === 'ru' &&  <li className="nav-item">Постановка</li>}

                 
            {language === 'am' && <li className="nav-item">Մեր մասին</li>}
            {language === 'en' &&  <li className="nav-item">About Us</li>}
            {language === 'ru' &&  <li className="nav-item">о нас</li>}
            
            {language === 'am' && <li className="nav-item">Բլոգ</li>}
            {language === 'en' &&  <li className="nav-item">Blog</li>}
            {language === 'ru' &&  <li className="nav-item">Блог</li>}
            
            {language === 'am' && <li className="nav-item">Կապ</li>}
            {language === 'en' &&  <li className="nav-item">Contact Us</li>}
            {language === 'ru' &&  <li className="nav-item">Контакт</li>}
            
             
            </ul>
           
          </div>
        </div>
        <div className="language-switcher">
          <button className='bibi' onClick={() => handleLanguageSwitch('am')}><img className='es'
                src="https://flagdownload.com/wp-content/uploads/Flag_of_Armenia_Flat_Round-1024x1024.png"
                alt="Armenian Flag"
                onClick={() => handleLanguageSwitch('am')}
              /></button>
          <button className='bibi' onClick={() => handleLanguageSwitch('en')}><img className='es'
                src="https://img.freepik.com/free-icon/united-states-america_318-297392.jpg"
                alt="US Flag"
                onClick={() => handleLanguageSwitch('en')}
              /></button>
          <button className='bibi' onClick={() => handleLanguageSwitch('ru')}><img className='es2'
                src="https://static.vecteezy.com/system/resources/previews/015/089/231/original/russia-3d-rounded-flag-with-transparent-background-free-png.png"
                alt="Russian Flag"
                onClick={() => handleLanguageSwitch('ru')}
              /></button>
        </div>
      </header>
    </>
  );
}

export default Header;
