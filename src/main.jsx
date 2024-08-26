import React from 'react';
import ThemeProvider from './theme';
import { StyledChart } from './Components/chart';
import ScrollToTop from './Components/scroll-to-top';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router'; // Import the updated router component
import { ContextProvider } from './Contexts/ContextProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <BrowserRouter >
    <ContextProvider>
    <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
    </ContextProvider>
</BrowserRouter>
  </React.StrictMode>
);
