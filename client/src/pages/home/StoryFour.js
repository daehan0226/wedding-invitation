import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function StoryFour() {
  return (
    <Box
      width='100%'
      height='auto'
      position='relative'
    >
      <Typography sx={{ position: 'absolute', left: '0%', top: '50%', textAlign: 'center', width: '100%'}} variant="h4" color={'text.white'}>
            {"BECAUSE THESE MOMENTS ARE TOO GOOD TO MISS"}       
      </Typography>
      <img
        src={`${process.env.PUBLIC_URL}/images/10.jpg`}
        width='100%'
        height='auto'
        alt=''
        style={{opacity:'0.3'}}
      />    
    </Box>
  );
}

export default StoryFour;
