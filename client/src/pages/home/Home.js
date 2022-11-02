import Box from '@mui/material/Box';
import StoryOne from './StoryOne';
import StoryTwo from './StoryTwo';
import StoryThree from './StoryThree';
import StoryFour from './StoryFour';

function Home() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <StoryOne></StoryOne>
      <StoryTwo></StoryTwo>
      <StoryThree></StoryThree>
      <StoryFour></StoryFour>
    </Box>
  );
}

export default Home;
