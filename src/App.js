import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header'; // Updated import
import Footer from './components/Footer'; // Updated import
import AppRoutes from './routes/route'; // Updated import
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Define your custom theme here
const theme = createTheme({
  typography: {
    fontSize: 12, // Default base font size
    h4: {
      fontSize: '1.5rem', // Header sizes
    },
    body1: {
      fontSize: '0.875rem', // Body text size
    },
    button: {
      fontSize: '0.875rem', // Button text size
    },
  },
});


function App() {
  const [user, setUser] = useState(null);  // User state, initially null (not logged in)

  const handleLogin = (userName) => {
    setUser({ name: userName });
  };

  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header user={user} onLogin={handleLogin} />
      <Container>
        <AppRoutes user={user} onLogin={handleLogin} />  {/* Use Routes */}
      </Container>
      <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
