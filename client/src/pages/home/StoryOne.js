import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function StoryOne() {
  return (
    <Box mb={2} sx={{}}>
      <Box 
        padding={{ 
          mobile: 0, laptop: 6
        }} 
        sx={{
          height: { mobile: 1000, laptop: 'auto' }
        }}  
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex', 
            justifyContents: 'center',
            alignItems: 'center',
            height: { mobile: 500, laptop: 'auto' }
          }}
        >
          <Box
            sx={{
              width: { mobile: 300, laptop: 400},
              position: { mobile: 'absolute', laptop: 'relative'},
              top: { mobile: -30, laptop: 0},
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/on_swing.jpg`}
              style={{
                maxWidth: 300,
                minWidth: 200
              }}
              alt=''
            />   
          </Box>
          
          <Box
            sx={{
              zIndex: 100,
              margin: 1,
              position: { mobile: 'absolute', laptop: 'relative'},
              bottom: { mobile: -40, tablet: -60, laptop: 0},
            }}
          >
            <Typography variant="h3" color={'text.white'} mb={2} sx={{ 
                fontFamily: 'lilirose',
                textAlign: { mobile : 'left', laptop: 'center'}
                }} >
                {"How we met"}       
            </Typography>
            <Typography  mb={{ mobile: 2, laptop: 3}} variant="h4" color={'text.white'} sx={{ 
                fontFamily: 'lilirose'}}>
                {"Sophia and Carter met in 2009 during senior year of high school, during an Intro to Photography class. Students were assigned a project that required them to shoot architectural buildings throughout San Francisco."}       
            </Typography>
          </Box>

        </Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex', 
            justifyContents: 'center',
            alignItems: 'center',
            height: { mobile: 500, laptop: 'auto' }
          }}
        >
        <Box
          sx={{
            zIndex: 10,
            margin: 1,
            position: { mobile: 'absolute', laptop: 'relative'},
            bottom: { mobile: -100, tablet: -60, laptop: 0},
          }}
        >
          <Typography mb={{ mobile: 4, laptop: 6}} variant="h4" color={'text.white'} sx={{
                textAlign: { mobile : 'right', laptop: 'center'} }} >
              {"How we met"}       
          </Typography>

          <Typography  mb={{ mobile: 2, laptop: 3}} variant="h4" color={'text.white'}>
              {"Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Idest venenatis a condimentum vitae sapien pellentesque habitant, acestes turpis egestas integer eget aliquet nibh praese."}       
          </Typography>
        </Box>
        <Box
          sx={{
            width: { mobile: 300, laptop: 600},
            position: { mobile: 'absolute', laptop: 'relative'},
            bottom: { mobile: -40, laptop: 0},
            right: { mobile: 0, tablet: 20},
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/in_door.jpg`}
            width='100%'
            height='auto'
            alt=''
            style={{
              maxWidth: 600,
              minWidth: 300
            }}
          />
        </Box>
        </Box>

        
        
      </Box>
    </Box>
  );
}

export default StoryOne;
