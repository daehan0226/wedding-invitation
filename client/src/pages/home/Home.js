import Box from '@mui/material/Box';
import StoryOne from './StoryOne';
import StoryTwo from './StoryTwo';
import StoryThree from './StoryThree';
import StoryFour from './StoryFour';
import Typography from '@mui/material/Typography';
import { MAIL } from '../../config/config';

function Home() {
  return (
    <Box
      sx={{
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    >
      <StoryOne></StoryOne>
      <StoryTwo></StoryTwo>
      {/* <StoryThree></StoryThree>
      <StoryFour></StoryFour> */}
      <Box
      sx={{
            width: '100%',
            paddingBottom: '10px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end'
      }}>
        <Typography sx={{ textAlign: 'center' }} variant="caption" color={'text.white'} >
            {`If you have any questions please send an email to `}<a href={`mailto:${MAIL}`}>{`${MAIL}`}</a>
          </Typography>
      </Box>
    </Box>
  );
}

export default Home;
