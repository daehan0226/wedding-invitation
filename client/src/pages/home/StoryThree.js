import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function StoryThree() {
  return (
    <Box mt={2} sx={{ backgroundColor: 'brown.200', position: 'relative'}}>
      <Box
        padding={{ 
          mobile: 7, laptop: 14
        }} 
        sx={{
          margin: 'auto 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
          position: 'relative',
        }}  
      >
        <Typography mb={{ mobile: 4, laptop: 6}} variant="h4" color={'text.white'}>
            {"BECAUSE THESE MOMENTS ARE TOO GOOD TO MISS"}       
        </Typography>
        
        <Typography  mb={{ mobile: 2, laptop: 3}} variant="h6" color={'text.white'}>
            {"Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Idest venenatis a condimentum vitae sapien pellentesque habitant, acestes turpis egestas integer eget aliquet nibh praese."}       
        </Typography>  

        <Typography variant="body1" color={'text.white'}>
            {"Elizabeth and Nicholas met in 2009 during senior year of high school, during an Intro to Photography class. Students were assigned a project that required them to shoot architectural buildings throughout San Francisco. One afternoon, they ran into each other on the street - they were photographing the same building, just from different vantage points! - and decided to shoot together. The afternoon turned to evening and ended with ice cream, where they talked until the shop closed. And the rest, as they say, is history."}       
        </Typography>  
      </Box>
    </Box>
  );
}

export default StoryThree;
