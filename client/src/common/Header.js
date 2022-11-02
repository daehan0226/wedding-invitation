import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const title = 'Alxy Dycus && Blake D.Brown'
const links = [
  {
    'link': '/',
    'title': 'Home'
  },
  {
    'link': '/rsvp',
    'title': 'RSVP'
  },
  {
    'link': '/wedding',
    'title': 'WEDDING'
  },
  {
    'link': '/travel',
    'title': 'TRAVEL'
  },
]


function Header() {
  return (
    <Box m={2} >
      <Box m={2}>
        {title}
      </Box>
      <Box mb={1} sx={{ display: 'flex', justifyContent: 'space-around' }} >
        {links.map(({link, title}) => (
          <a key={title} href={link}>
          <Typography variant="body1" color={'primary.500'} mb={2}>
              {title}       
          </Typography>     
            </a>
        ))}        
      </Box>
    </Box>
  );
}

export default Header;
