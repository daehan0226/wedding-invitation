import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
        mt={{ mobile: 10, laptop: 15}} 
        sx={{ 
          minHeight: 400,
          padding: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { mobile : 'column', laptop: 'row'},
          backgroundColor: 'primary.#3'
        }}
      >      
        {images.map(image=>(
            <Box key={image.title} sx={{
              width: { mobile : 300, tablet: 450, laptop: 600 },
              height: { mobile : 300, tablet: 450, laptop: 600 },
              boxSizing: 'border-box',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderRadius: 'inherit',
              position: 'relative',
              margin: '5px',
            }}>
              <img
                src={image.url}
                style={{
                  width: '100%',
                  height: '100%',
                  borderColor: 'transparent',
                  borderWidth: '5px', 
                }}
                alt={image.alt} 
              />
              <Typography sx={{ 
                position: 'absolute',
                textAlign: 'center',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'text.white',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                width: '80%',
                WebkitLineClamp: 3,
                wordBreak: 'break-all'
              }} 
              >{image.title}</Typography>
              <Typography sx={{ 
                position: 'absolute',
                top: '40%',
                left: '50%',
                textAlign: 'center',
                transform: 'translate(-50%, -50%)',
                color: 'text.white',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                width: '80%',
                WebkitLineClamp: 3,
                wordBreak: 'break-all'
              }} 
              >{image.text}</Typography>
            </Box>
          ))
        }
      </Box>
  );
}

export default StoryTwo;
