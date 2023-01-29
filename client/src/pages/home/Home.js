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
          position: 'relative',
        }}
        >
          <Box sx={{position: 'absolute', right: '-18px', width:{ mobile: '0px', laptop: '60%'}, zIndex: -1,  top: '-34px' }} >
            <img
              src={`${process.env.PUBLIC_URL}/images/branch.png`}
              width='100%'
              alt='branch'
            />
          </Box>
        <StoryOne></StoryOne>
        <StoryTwo></StoryTwo>
        <StoryThree></StoryThree>
        <Box sx={{position: 'absolute', left: '-18px', width:{ mobile: '0px', laptop: '60%'}, zIndex: -1,  bottom: '-34px', transform: "rotate(180deg);" }} >
          <img
            src={`${process.env.PUBLIC_URL}/images/branch.png`}
            width='100%'
            alt='branch'
          />
        </Box>
      </Box>
    </>
  );
}

export default Home;
