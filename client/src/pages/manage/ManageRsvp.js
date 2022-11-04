import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function ManageRsvp({rsvpList}) {
  return (
    <Box
      width='100%'
      height='auto'
      position='relative'
    >
      {rsvpList.map(rsvp=>(
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
            People including the person: {rsvp.numberOfPeople}          
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ManageRsvp;
