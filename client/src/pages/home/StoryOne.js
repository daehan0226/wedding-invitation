import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const title = "How we met"
const contextOne =`Blake and Alex met in the summer of 2017. If anyone asked when they first started dating how they met, Alex normally answered mutual friends, but the truth was they met online! After chatting back and forth Blake asked Alex on their first date. He suggested stand up paddle boarding on a lake near Carbondale IL where Alex was living. (Alex had never been paddle boarding so this was either going to be super fun or a disaster). Before heading out to the water Alex asked for them to meet at her favorite coffee shop to get coffee and chat in person.`
const contextTwo = `On July 1st 2017 Alex waited patiently at common grounds with her iced mudslide mocha for Blake to arrive. (She was early which wouldn’t surprise anyone who knows her). Blake on the other hand was a few minutes late, but for good reason. On the drive down from Belleville he decided he was going to stop at the farmers market to get fresh flowers! (And boy were they beautiful) a local farmer sells gladioluses this time of year and Blake picked out three gorgeous stems. (Did you know gladiolus is the flower of gladiators, symbolizing strength, victory, and integrity?) Alex was  immediately drawn to Blake’s charisma and charm, and those blue blue eyes! After chatting for a while they finally got the show on the road and hit the lake. Though a little wobbly at first Alex got the hang of the paddle boards quickly and the couple enjoyed a day in the sunshine- drinking, laughing, and getting to know each other. And the rest ,as they say, is history. Did they have their first kiss as he dropped her off back at home? Maybe.`


function StoryOne() {
  return (
    <Box mb={2} sx={{}}>
      <Box 
        padding={{ 
          mobile: 0, laptop: 6
        }} 
        sx={{
          height: {mobile: 900, laptop: 800},
          position: 'relative'
        }}  
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex', 
            justifyContents: 'center',
            alignItems: 'center',
            height: 'auto',
          }}
        >
          <Box
            sx={{
              width: { mobile: '50%', tablet: 300 },
              position: 'absolute',
              top: { mobile: -30, laptop: 0},
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/dance_hug.jpg`}
              style={{
                width: '100%'
              }}
              alt=''
            />   
          </Box>
          
          <Box
            sx={{
              zIndex: 100,
              margin: "0px auto",
              width: { mobile: '90%', laptop: '60%'}
            }}
          >
            <Typography variant="h1" color={'text.white'} mb={2} sx={{ 
                fontFamily: 'lilirose !important',
                textAlign: 'center',
                fontSize: { mobile: '30px', tablet: '34px', laptop: '40px' },
                marginTop: { mobile: '100px', tablet: '100px', laptop: '100px'}
                }} >
                {title}       
            </Typography>
            <Typography  mt={{ mobile: 12, laptop: 20 }} mb={{ mobile: 2, laptop: 3}} variant="h4" color={'text.white'} sx={{
              fontSize: { mobile: '14px', tablet: '17px', laptop: '20px' }
            }} >
                {contextOne}       
            </Typography>
            <Typography  mb={{ mobile: 2, laptop: 3}} variant="h4" color={'text.white'} sx={{
              fontSize: { mobile: '14px', tablet: '17px', laptop: '20px' },
              marginTop: { mobile: '40px', tablet: '30px', laptop: '20px'}
            }} >
                {contextTwo}       
            </Typography>
          </Box>

        </Box>
        <Box
          sx={{
            width: { mobile: '50%', tablet: 300 },
            position: 'absolute',
            bottom: { mobile: -130, tabelt: -80, laptop: 0},
            right: { mobile: 0, laptop: 20},
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/carry_on_back.jpg`}
            alt=''
            style={{
              width: '100%'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default StoryOne;
