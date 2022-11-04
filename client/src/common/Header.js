import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const title = 'Alex Dycus && \n Blake D.Brown'
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
          backgroundPosition: { mobile: '-100px -550px', laptop: '0px -400px'} ,
          opacity: '0.9'
      }}>
      <Box 
        sx={{
          height: { mobile: '400px', laptop: '500px'},
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          padding: { mobile: '20px', laptop: '40px'}
        }}>
          <Typography variant="h3" color={'text.white'} sx={{ fontFamily: 'jose'}} >
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
          <Button key={title} variant="text" href={link} sx={{
            "& .MuiTouchRipple-root span":{
              backgroundColor: 'white!important',
              opacity: .3,
            }
          }} >
            <Typography variant="body1" color={'text.white'}>
              {title}       
            </Typography>   
          </Button>
        ))}        
      </Box>
      </>
  );
}

export default Header;
