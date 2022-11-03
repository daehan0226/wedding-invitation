import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ManageRsvp from './ManageRsvp';
function Manage() {

  const navigate = useNavigate();
  useEffect(()=> {
    const isAdmin = true;
    if (!isAdmin) {
      navigate("/");
    }
  },[])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <ManageRsvp />
    </Box>
  );
}

export default Manage;
