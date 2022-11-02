import './App.css';
import Header from './common/Header';
import Color from './common/Color';

import { ThemeProvider } from '@mui/material/styles';
import theme from './ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header></Header>
        <Color></Color>
      </div>
    </ThemeProvider>
  );
}

export default App;