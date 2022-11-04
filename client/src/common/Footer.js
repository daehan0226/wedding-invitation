import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Footer() {
  return (
    <Box
      sx={{
        marginTop: 'auto',
        width: '100%',
        height: '60px',
        bottom: '0',
        position: 'absolute',
      }}
    >
      <Typography sx={{  }} variant="body1" color={'grey.600'}>
      Alex Dycus && Blake D.Brown         
      </Typography>
    </Box>
  );
}

export default Footer;
