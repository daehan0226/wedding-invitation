import { MAIL } from '../config/config';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

function Footer() {
  return (
      <Box 
        sx={{
          margin: 10,
          backgroundColor: 'primary.#4'
        }}>
      <Typography sx={{ textAlign: 'center', zIndex: 100}} variant="caption" color={'grey.500'}>
          {`If you have any questions please send an email to `}<a href={`mailto:${MAIL}`}>{`${MAIL}`}</a>
        </Typography>
      </Box>
  );
}

export default Footer;
