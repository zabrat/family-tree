import React from 'react';
import MainPage from './modules/mainPage/MainPage';
import './App.css';

const App: React.FC = () => {
  return (
    <MainPage/>
  );
}

export default React.memo(App);
