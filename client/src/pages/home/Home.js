import Box from '@mui/material/Box';
import StoryOne from './StoryOne';
import StoryTwo from './StoryTwo';
import StoryThree from './StoryThree';

function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
        }}
        >
        <StoryOne></StoryOne>
        <StoryTwo></StoryTwo>
        <StoryThree></StoryThree>
      </Box>
    </>
  );
}

export default Home;
