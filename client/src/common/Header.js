import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const title = 'Alex Dycus && Blake D.Brown'
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
    <>
      <Box 
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/8.jpg)`,
          width: '100%',
          height: { mobile: '400px', laptop: '500px'},
          backgroundPosition: '0px -400px',
          opacity: '0.9'
      }}>
      <Box 
        sx={{
          height: { mobile: '400px', laptop: '500px'},
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
          <Typography variant="h1" color={'text.white'}>
              {title}       
          </Typography>  
      </Box>
    
    </Box>
      <Box 
        mb={1} 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center'
        }} 
        // backgroundColor={'text.black'}
        height={{mobile: 40, laptop: 50, desktop: 60}}
      >
        {links.map(({link, title}) => (
          <a key={title} href={link}>
          <Typography variant="body1" color={'text.white'}>
              {title}       
          </Typography>     
            </a>
        ))}        
      </Box>
      </>
  );
}

export default Header;
