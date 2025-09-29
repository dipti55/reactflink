import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Theme from './components/Theme.jsx'
import { ThemeProvider } from '@mui/material'
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
