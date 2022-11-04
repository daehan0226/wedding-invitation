import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const images = [
  {
    url: `${process.env.PUBLIC_URL}/images/1.jpg`,
    alt: 'Albi',
    title: 'Albi',
    date: '2020.01.01',
    ratio: 1
  },
  {
    url: `${process.env.PUBLIC_URL}/images/6.jpg`,
    alt: 'Fox',
    title: 'Kate',
    date: '2020.01.01',
    ratio: 1.2
  },
  {
    url: `${process.env.PUBLIC_URL}/images/7.jpg`,
    alt: 'Sevi',
    title: 'Sevi',
    date: '2020.01.01',
    ratio: 1
  }
]


function StoryTwo() {
  return (
    <>
      <img
          src={`${process.env.PUBLIC_URL}/images/12.jpg`}
          style={{
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            top: '400px',
          }}
        />
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
              zIndex: 100,
              position: 'relative',
            }}>
              <img
                src={image.url}
                width={String(250*image.ratio)}
                height={String(250*image.ratio)}
                style={{
                  borderRadius: '5px', 
                  margin: '10px',     
                  border: '3px solid #F8F6F1',
                }}
                alt={image.alt} 
              />
              <Typography sx={{ textAlign: 'center'}} >{image.title}</Typography>
              <Typography sx={{ textAlign: 'center'}} >{image.date}</Typography>
            </Box>
          ))
        }
      </Box>
    </>
  );
}

export default StoryTwo;
