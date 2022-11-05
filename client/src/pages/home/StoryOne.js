import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function StoryOne() {
  return (
    <Box mt={2} mb={2} sx={{ backgroundColor: 'brown.300'}}>
      <Box 
        m={1}
        padding={{ 
          mobile: 1, laptop: 6
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
              top: { mobile: -20, laptop: 0},
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
              margin: 3,
              position: { mobile: 'absolute', laptop: 'relative'},
              bottom: { mobile: -100, tablet: -60, laptop: 0},
            }}
          >
            <Typography mb={{ mobile: 4, laptop: 6}} variant="h4" color={'text.white'}>
                {"BECAUSE THESE MOMENTS ARE TOO GOOD TO MISS"}       
            </Typography>

            <Typography  mb={{ mobile: 2, laptop: 3}} variant="h6" color={'text.white'}>
                {"Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Idest venenatis a condimentum vitae sapien pellentesque habitant, acestes turpis egestas integer eget aliquet nibh praese."}       
            </Typography>
            
            <Typography  mb={{ mobile: 2, laptop: 3}} variant="h6" color={'text.white'}>
                {"Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Idest venenatis a condimentum vitae sapien pellentesque habitant, acestes turpis egestas integer eget aliquet nibh praese."}       
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
            margin: 3,
            position: { mobile: 'absolute', laptop: 'relative'},
            bottom: { mobile: -100, tablet: -60, laptop: 0},
          }}
        >
          <Typography mb={{ mobile: 4, laptop: 6}} variant="h4" color={'text.white'}>
              {"BECAUSE THESE MOMENTS ARE TOO GOOD TO MISS"}       
          </Typography>

          <Typography  mb={{ mobile: 2, laptop: 3}} variant="h6" color={'text.white'}>
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
