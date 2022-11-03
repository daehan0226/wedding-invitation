import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const data = [
  {
    'id': '1',
    'name': 'ttt1',
    'meal': 'ttt2',
    'message': 'message1',
    'attend': true,
    'number': 1,
  }
]


function ManageRsvp() {
  return (
    <Box
      width='100%'
      height='auto'
      position='relative'
    >
      {data.map(rsvp=>(
        <Box key={rsvp.id}>
          <Typography sx={{  }} variant="h4" color={'text.black'}>
            Name: {rsvp.name}          
          </Typography>
          <Typography sx={{  }} variant="h4" color={'text.black'}>
            meal: {rsvp.meal}          
          </Typography>
          <Typography sx={{  }} variant="h4" color={'text.black'}>
            attend: {rsvp.attend ? 'Yes': 'No'}          
          </Typography>
          <Typography sx={{  }} variant="h4" color={'text.black'}>
            People including the person: {rsvp.number + 1}          
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ManageRsvp;
