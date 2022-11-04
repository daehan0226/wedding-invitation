import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ManageRsvp from './ManageRsvp';
import ManageLogin from './ManageLogin';
import axios from 'axios';
import { API } from '../../config/config';





function Manage() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ rsvp, setRsvp ] = useState([])
  const [ username, setUsername ] = useState('')

  const navigate = useNavigate();
  useEffect(()=> {
    const isAdmin = true;
    if (!isAdmin) {
      navigate("/");
    }
  },[])
  
  const config = {
    headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access_token}` }
  };

  function validateToken() {
  console.log(config)
  axios.get( 
      `http://${API}/auth/me`,
      config,
    ).then((res)=> {
      if (res.status === 200 && res.data?.payload?.name) {
        setIsLoggedIn(true)
        setUsername(res.data.payload.name)
      }
      // console.log(`res: ${JSON.stringify(res)}`)
    }).catch((err)=> {
      setIsLoggedIn(false)
      setUsername("")
      // console.log(`err: ${err}`)
    });
  }


function getRsvp() {
  axios.get( 
    `http://${API}/rsvp`,
    config,
  ).then((res)=> {
    if (res.status === 200 && res.data) {
      setRsvp(res.data)
    }
    // console.log(`res: ${JSON.stringify(res.data)}`)
  }).catch((err)=> {
    // console.log(`err: ${err}`)
  });
}

  useEffect(()=>{
    validateToken()
  }, [])

  
  useEffect(()=>{
    if (isLoggedIn && username) {
      getRsvp()
    }
  }, [isLoggedIn, username])


  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <p>{username}</p>
      {(isLoggedIn && username
        ) ? (
          <ManageRsvp  rsvpList={rsvp} />
        ) : (
          <ManageLogin />
        )
      }
    </Box>
  );
}

export default Manage;
