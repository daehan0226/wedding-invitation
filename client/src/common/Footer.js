import { MAIL } from '../config/config';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

function Footer() {
  return (
    <>
    {
      !window.location.href.includes('rsvp') ? 
      <Box
      sx={{
            backgroundColor: 'primary.#3',
            width: '100%',
            paddingBottom: '10px',
            height: '80px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 'auto',
      }}>
        <Typography sx={{ textAlign: 'center', margin: '20px' }} variant="caption" color={'text.white'} >
            {`If you have any questions please send an email to `}<a href={`mailto:${MAIL}`}>{`${MAIL}`}</a>
          </Typography>
      </Box> : null
    }
    
    </>
  );
}

export default Footer;
