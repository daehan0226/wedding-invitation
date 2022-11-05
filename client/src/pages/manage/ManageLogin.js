import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../config/config';





function ManageLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  function handleLogin() {
  
    axios.post( 
        `http://${API}/user/login`,
        {
          name: username,
          password
        },
        null
      ).then((res)=> {
        console.log(res)
        if (res.status === 200 && res.data?.name) {
          console.log(res.data.name)
          localStorage.setItem("token", JSON.stringify(res.data));
          alert(`Welcome ${res.data.name}!`)
          window.location.reload();
        }
        // console.log(`res: ${JSON.stringify(res)}`)
      }).catch((err)=> {
        // console.log(`err: ${err}`)
      });
  }


  return (
    <Box
      margin='0px auto'
      width='400px'
      height='auto'
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Input
          type='text' 
          onChange={(e)=>setUsername(e.target.value)} 
          value={username} 
      />
      
      <Input
          type='text' 
          onChange={(e)=>setPassword(e.target.value)} 
          value={password} 
      />

      <Button 
        variant='body1'
        color={'text.black'} 
        sx={{ margin:'20px' }} 
        onClick={handleLogin}
        disabled={username === "" && password === ""}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ManageLogin;
