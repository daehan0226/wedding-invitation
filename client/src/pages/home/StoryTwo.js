import Box from '@mui/material/Box';


function StoryTwo() {
  return (
    <Box 
      m={{ mobile: 10, laptop: 15}} 
      sx={{ 
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { mobile : 'column', laptop: 'row'}
      }}
      >
       <img
        src={`${process.env.PUBLIC_URL}/images/1.jpg`}
        width='250'
        height='250'
        style={{borderRadius: '5px', margin: '10px'}}
        alt='Albi' 
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/6.jpg`}
        width='300'
        height='300'
        style={{borderRadius: '5px',  margin: '10px'}}
        alt='Fox' 
      />
      <img
        src={`${process.env.PUBLIC_URL}/images/7.jpg`}
        width='250'
        height='250'
        style={{borderRadius: '5px', margin: '10px'}}
        alt='Sevi' 
      />
    </Box>
  );
}

export default StoryTwo;
