import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const title = "The proposal"
const contextOne =`Fast forward a few years (2021) and many many hiking treks, camping trips, river floats, beer and pizza dates, movie nights, and more adventures than they could count- Blake and Alex bought their first house together in Makanda IL, just 8 minutes from the lake where they had their first date. Multiple times Alex and Blake have celebrated their anniversary back on Cedar lake with sunshine, beer, and fun in the water. July 1st 2022 wasn’t any different, except they went out on Blake’s newly acquired fishing boat! Blake spent the first part of the day fishing and Alex was lounging in the sun reading, but she knew he had some sort of surprise in store for her…  so she gently asked if the surprise was on the boat. (It was!)`
const contextTwo = `Blake told her to close her eyes while he got everything ready (pulled things out of bags etc.) then he took out his phone and read Alex the meaning of turquoise (one of her favorite stones!) wisdom, tranquility, and enduring love! Then he slipped two bracelets made with turquoise beads onto her wrists. They were beautiful and Alex loved them (honestly she was thinking well that was the perfect opportunity to propose and here we are, but I love them). Blake let her “oo” and “ahhh” over the bracelets, then just when things started to die down, he said oh and that’s not all! Blake asked “it’s been a great 5 years hasn’t it?”  Then he got down on one knee and ask “would you like to continue this for the rest of our lives?” Obviously Alex said yes, many many times in fact!  He proposed using a ring he had bought locally but wanted Alex to have a say in the actual wedding ring (smart man!). He showed her his idea for which ring he wanted to get her and Alex immediately fell in love with it!`


function StoryThree() {
  return (
    <Box mb={2} sx={{}}>
      <Box 
        padding={{ 
          mobile: 0, laptop: 6
        }} 
        sx={{
          height: { mobile: 1000, laptop: 900},
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
              top: { mobile: -20, tablet: 0},
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/on_swing.jpg`}
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
              width: { mobile: '95%', laptop: '70%'}
            }}
          >
            <Typography variant="h1" color={'text.white'} mb={4} sx={{ 
                fontFamily: 'lilirose !important',
                textAlign: 'center',
                fontSize: { mobile: '30px', tablet: '34px', laptop: '40px' },
                marginTop: { mobile: '100px', tablet: '100px', laptop: '50px'}
                }} >
                {title}       
            </Typography>
            <Typography mt={{ mobile: 18, tablet: 30, laptop: 25}} mb={{ mobile: 2, laptop: 3}} variant="h4" color={'text.white'} sx={{
              fontSize: { mobile: '14px', tablet: '17px', laptop: '20px' },
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
            bottom: { mobile: -30, laptop: 0 },
            top: { laptop: 100},
            right: { mobile: 0, laptop: 20},
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/ring.jpg`}
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

export default StoryThree;
