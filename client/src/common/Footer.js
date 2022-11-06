import Box from '@mui/material/Box';
import { MAIL } from '../config/config';
import Typography from '@mui/material/Typography';


function Footer() {
  return (
    // <Box
    //   sx={{
    //     marginTop: 'auto',
    //     width: '100%',
    //     paddingBottom: '10px',
    //     height: '80px',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'end'
    //   }}
    // >
      <Typography sx={{ textAlign: 'center' }} variant="caption" color={'grey.500'}>
          {`If you have any questions please send an email to `}<a href={`mailto:${MAIL}`}>{`${MAIL}`}</a>
        </Typography>
    // </Box>
  );
}

export default Footer;
