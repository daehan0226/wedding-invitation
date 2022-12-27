import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import ManageRsvp from './ManageRsvp';
import { getRsvp } from '../../helper/api';

function Manage() {
  const [ rsvp, setRsvp ] = useState([])
  useEffect(()=>{
    async function fetchData() {
      const data = await getRsvp()
      setRsvp([...data])
    }
    fetchData();
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        position: 'relative',
      }}
    >
      <ManageRsvp  rsvpList={rsvp} />
    </Box>
  );
}

export default Manage;
