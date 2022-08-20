import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import theme from './styles/theme';
import { AppBaar } from './components/appbar';
import { Banar } from './components/banar';
import { Promotion } from './components/promotion';
import { Drawar } from './components/appDrawar/Drawar';
import { UIProvider } from './context';
import { Product } from './components/product';
import { createContext, useState } from 'react';
export const UIContext = createContext();

function App() {
  const [drawrOpen, setdrawrOpen] = useState(false);
  const value = {
    drawrOpen,
    setdrawrOpen
  }
  return (
    <ThemeProvider theme={theme}>

      <Container >
        <UIContext.Provider value={value}>
          <AppBaar />
          <Drawar />


          <Banar />
          <Promotion />
          <Product />
        </UIContext.Provider>
      </Container>

    </ThemeProvider>

  );
}

export default App;
