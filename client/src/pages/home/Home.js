import Box from '@mui/material/Box';
import StoryOne from './StoryOne';
import StoryTwo from './StoryTwo';
import StoryThree from './StoryThree';
import Footer from '../../common/Footer';

function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
        >
        <StoryOne></StoryOne>
        <StoryTwo></StoryTwo>
        <StoryThree></StoryThree>
        
      </Box>
      <Footer />
    </>
  );
}

export default Home;
