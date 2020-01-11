import React from 'react';
import './App.css';
import { Landing } from './views/landing/Landing';
import { theme } from './theme/theme';
import { ThemeProvider } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </div>
  );
};

export default App;
