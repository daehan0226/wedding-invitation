import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Travel from './pages/Travel';
import Home from './pages/Home';
import Header from './common/Header';
import Color from './common/Color';
import theme from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        backgroundColor: 'brown.600',
        width: '100%',
        height: '100%'
      }}>
        <Header></Header>
        <Color></Color>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          {/* <Route path="/room/:roomName" element={<Chatroom />} /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;