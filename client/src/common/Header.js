import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const title = 'Alex & Blake Brown'
const date = 'October 14, 2023'
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
      <Box 
        sx={{
          width: '100%',
          zIndex: 1000,
          height: { mobile: '150px', tablet: '170px', laptop: '200px'},
          backgroundColor: 'primary.#3',
          position: 'relative',
      }}>
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          paddingTop: { mobile: '20px', tablet: '30px'},
        }}>
          <Typography variant="h2" color={'primary.#1'} sx={{ 
            fontFamily: 'lovely !important',
            fontSize: '28px'
          }} >
              {title}       
          </Typography> 
          <Typography variant="h5" color={'primary.#1'} sx={{ 
            fontFamily: 'beautiful-simple !important',
            marginTop: 2,
            fontSize: '18px'
          }} >
              {date}       
          </Typography> 
      </Box>
      <Box 
        mt={{mobile: 1, laptop: 2, desktop: 3}}
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center'
        }} 
        height={{mobile: 40, laptop: 50, desktop: 60}}
      >
        {links.map(({link, title}) => (
          <Button key={title} variant="text" href={link} sx={{
            "& .MuiTouchRipple-root span":{
              backgroundColor: 'white!important',
              opacity: .3,
            }
          }} >
            <Typography variant="body1" color={'primary.#4'} sx={{ fontFamily: 'beautiful-simple !important', 
              fontSize: '16px'}} >
              {title}       
            </Typography>   
          </Button>
        ))}        
      </Box>
      </Box>
  );
}

export default Header;
