// src/App.jsx
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import ContextProvider from './context/Context'; // Corrected import path

const App = () => {
  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
};

export default App;
