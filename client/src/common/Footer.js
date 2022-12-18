import { MAIL } from '../config/config';
import Typography from '@mui/material/Typography';


function Footer() {
  return (
      <Typography sx={{ textAlign: 'center', zIndex: 100 }} variant="caption" color={'grey.500'}>
          {`If you have any questions please send an email to `}<a href={`mailto:${MAIL}`}>{`${MAIL}`}</a>
        </Typography>
  );
}

export default Footer;
