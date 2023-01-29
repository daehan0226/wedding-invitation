import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import ManageRsvp from './ManageRsvp';
import { getRsvp } from '../../helper/api';
import LoginComponent from './LoginComponent';
import jwt_decode from "jwt-decode";

function Manage() {
  const [ loggedIn, setLoggedIn ] = useState(false)
  const [ userId, setUserId ] = useState("")
  const [ rsvp, setRsvp ] = useState([])
  useEffect(()=>{
    async function fetchData() {
      const data = await getRsvp()
      setRsvp([...data])
    }
    if (loggedIn) {
      fetchData();
    }
  }, [loggedIn])

  useEffect(()=>{
    setLoggedIn(false)
    try {
      const token = localStorage.getItem('accessToken');
      const decoded = jwt_decode(token);
      if (decoded?.sub) {
        setUserId(decoded.sub)
        setLoggedIn(true)
      }
    } catch {}
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto;',
        minHeight: '500px',
        position: 'relative',
      }}
    >
      {loggedIn ? (
        <ManageRsvp  rsvpList={rsvp} />
      ) : (
        <LoginComponent />
      )}
    </Box>
  );
}

export default Manage;
