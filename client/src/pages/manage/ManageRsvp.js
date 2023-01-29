import Box from '@mui/material/Box';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', minWidth: 300 },
  { field: 'attend', headerName: 'Attend', width: 100 },
  { field: 'numberOfPeople', headerName: 'Number', width: 100, type: 'number' },
  {
    field: 'message',
    headerName: 'Message',
    minWidth: 600,
    type: 'text'
  },
  { field: 'createdAt', headerName: 'Submit Date', width: 200 },
];

function ManageRsvp({rsvpList}) {
  const [rsvp, setRsvp] = React.useState([]);

  React.useEffect(()=>{
    setRsvp([])
    if (rsvpList.length > 0) {
      const formattedRsvp = rsvpList.map(rsvp=> { return {
        ...rsvp,
        attend: rsvp.attend ? 'Yes' : 'No',
        NumberOfPeopel: rsvp.numberOfPeople + 1,
        createdAt: rsvp.createdAt ? rsvp.createdAt.toString() : ''
      }})
      console.log(formattedRsvp)
      setRsvp([
        ...formattedRsvp
      ])
    }
  }, [rsvpList])
  return (
    <Box
      width='90%'
      margin='30px auto'
      height='auto'
      position='relative'
    >
      <DataGrid
        sx={{
          minHeight: 400,
          fontFamily: 'lovely!important;',
        }}
        rows={rsvp}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
      />
    </Box>
  );
}
export default ManageRsvp;