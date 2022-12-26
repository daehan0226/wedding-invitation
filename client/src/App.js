import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import './App.css'
import Travel from './pages/Travel';
import Home from './pages/home/Home';
import Header from './common/Header';
import theme from './ui/theme';
import Rsvp from "./pages/Rsvp";
import Manage from "./pages/manage/Manage";
import Footer from "./common/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header></Header>
        <Box
          sx={{
            width: '100%',
            display: 'block',
            height: 'auto',
            boxSizing: 'border-box',
            paddingBottom: 4,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rsvp" element={<Rsvp />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/manage" element={<Manage />} />
          </Routes>   
        </Box>
        <Footer />
      </Box>       
    </ThemeProvider>
  );
}

export default App;