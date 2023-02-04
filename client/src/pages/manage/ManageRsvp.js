import Box from '@mui/material/Box';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', minWidth: 100 },
  { field: 'attend', headerName: 'Attend', width: 100 },
  { field: 'numberOfPeople', headerName: 'Number', width: 100, type: 'number' },
  {
    field: 'message',
    headerName: 'Message',
    minWidth: 300,
    type: 'text'
  },
  {
    field: 'request',
    headerName: 'Song request',
    minWidth: 300,
    type: 'text'
  },
  { field: 'createdAt', headerName: 'Submit Date', width: 200 },
];

function ManageRsvp({rsvpList}) {
  const [rsvp, setRsvp] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(()=>{
    setRsvp([])
    if (rsvpList.length > 0) {
      const formattedRsvp = rsvpList.map(rsvp=> { return {
        ...rsvp,
        attend: rsvp.attend ? 'Yes' : 'No',
        numberOfPeople: rsvp.numberOfPeople,
        createdAt: rsvp.createdAt ? rsvp.createdAt.toString() : ''
      }})
      setTotal(formattedRsvp.map(item => item.numberOfPeople).reduce((prev, next) => prev + next))
      setRsvp([
        ...formattedRsvp,
      ])
    }
  }, [rsvpList])
  return (
    <Box
      width='90%'
      margin='30px auto'
      marginBottom={0}
      height='auto'
      position='relative'
    >
    Total : {total}
      <DataGrid
        sx={{
          minHeight: 300,
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