import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { diffDay } from '../../helper/dday';


const images = [
  {
    url: `${process.env.PUBLIC_URL}/images/smile.jpg`,
    alt: 'photo1',
    title: '',
    text: '',
  },
  {
    url: `${process.env.PUBLIC_URL}/images/nose_kiss.jpg`,
    alt: 'photo2',
    title: '',
    text: '',
  },
  {
    url: `${process.env.PUBLIC_URL}/images/dance.jpg`,
    alt: 'photo3',
    title: '',
    text: '',
  }
]


function StoryTwo() {
  return (
      <Box 
        sx={{ 
          width: '100%',
          height: 'auto',
          display: 'block',
          position: 'relative',
          // backgroundImage: `url(${process.env.PUBLIC_URL}/images/nose_kiss.jpg})`,
          // backgroundSize: '100% auto'
        }}
      >
          <img
              src={`${process.env.PUBLIC_URL}/images/dday.jpg`}
              style={{
                width: '100%',
                height: 'auto',
                borderColor: 'transparent',
                borderWidth: '5px',
                opacity: '0.7'
              }}
              alt={'photo2'} 
            />
              <Typography variant="h2" color={'text.white'} sx={{ 
                position: 'absolute',
                width: '100%',
                top: '40%',
                textAlign: 'center',
                left: '0',
                fontSize: { mobile: '30px', tablet: '36px', laptop: '40px' }  
              }} >
                October 14, 2023
              </Typography>
              <Typography variant="h2" color={'text.white'} sx={{ 
                position: 'absolute',
                width: '100%',
                top: '55%',
                textAlign: 'center',
                left: '0',
                fontSize: { mobile: '30px', tablet: '36px', laptop: '40px' }  
              }} >
                {diffDay()}
              </Typography>
      </Box>
  );
}

export default StoryTwo;
