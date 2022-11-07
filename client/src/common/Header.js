import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const title = 'Alex & Blake Brown'
const subTitle = 'How we met'
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
          height: { mobile: '130px', tablet: '150px'},
          backgroundColor: 'primary.#3'
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
            fontSize: { mobile: '24px', tablet: '30px', laptop: '40px' }  
          }} >
              {title}       
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
            <Typography variant="body1" color={'primary.#4'} sx={{ fontFamily: 'beautiful-simple !important'}} >
              {title}       
            </Typography>   
          </Button>
        ))}        
      </Box>
      </Box>
  );
}

export default Header;
