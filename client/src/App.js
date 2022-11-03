import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Travel from './pages/Travel';
import Home from './pages/home/Home';
import Header from './common/Header';
import Color from './common/Color';
import theme from './ui/theme';
import Rsvp from "./pages/Rsvp";
import Manage from "./pages/manage/Manage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Color></Color>
      <Box sx={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        paddingBottom: 4,
        position: 'relative',
        display: 'block',
        flexDirection: 'column',
      }}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/manage" element={<Manage />} />
          {/* <Route path="/room/:roomName" element={<Chatroom />} /> */}
        </Routes>    
      </Box>       
    </ThemeProvider>
  );
}

export default App;