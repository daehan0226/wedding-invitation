import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function StoryFour() {
  return (
    <Box
      width='100%'
      height={200}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'primary.#4'
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/ring.jpg`}
        width='150px'
        height='150px'
        alt=''
        style={{
          borderRadius: '50%'
        }}
      />    
    </Box>
  );
}

export default StoryFour;
