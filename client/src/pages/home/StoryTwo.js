import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const images = [
  {
    url: `${process.env.PUBLIC_URL}/images/back_hug.jpg`,
    alt: 'photo1',
    title: 'title1',
    text: 'photo1',
  },
  {
    url: `${process.env.PUBLIC_URL}/images/carry_on_back.jpg`,
    alt: 'photo2',
    title: 'title2',
    text: 'text3',
  },
  {
    url: `${process.env.PUBLIC_URL}/images/nose_kiss.jpg`,
    alt: 'photo3',
    title: 'title3',
    text: 'text3',
  }
]


function StoryTwo() {
  return (
      <Box 
        m={{ mobile: 10, laptop: 15}} 
        sx={{ 
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { mobile : 'column', laptop: 'row'},
          position: 'relative'
        }}
      >      
        {images.map(image=>(
            <Box key={image.title} sx={{
              width: { mobile : 300, laptop: 600 },
              height: { mobile : 300, laptop: 600 },
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
                  width: '90%',
                  height: '90%',
                  borderColor: 'transparent',
                  borderWidth: '5px',
                  margin: '5%',     
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
