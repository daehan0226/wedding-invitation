import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { useConfirm } from '../hooks/useConfrim'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../config/config';

function Rsvp() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [bringingOne, setBringingOne] = useState(0);
  const [attend, setAttend] = useState(1);

  
  const handleAttendChange = (event) => {
    setAttend(Number(event.target.value));
  };

  const handleBringingOneChange = (event) => {
    setBringingOne(Number(event.target.value));
  };
  
  
  function onBlurHandler(name) {
    if (name === '') {
      setNameError('You must provide name')
    } else {
      setNameError('')
    }
  }
  
  useEffect((prev)=>{
    if (prev !== '' && name !== '') {
      setNameError('')
    }
  },[name])

  const confirmSubmit = useConfirm(
    `Is this correct?
      Name: ${name}
      Attend: ${attend? 'Yes': 'No'}
      Message: ${message}
    `,
    handleSubmit,
    () => {}
  );

  function handleSubmit() {
    const data = {
      name,
      numberOfPeople: attend === 1 ? bringingOne : 0,
      attend: attend === 1,
      message
    }
    console.dir(data)

    axios({
      method: 'post',
      url: `http://${API}/rsvp`,
      data
    })
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/11.png)`,
        width: '100%',
        backgroundColor: 'text.white',
        backgroundPosition: { mobile: '-100px -550px', laptop: '0px -400px'} ,
        opacity: '0.9'
    }}
    >
      <Box
        sx={{ 
          margin: '10px auto',
          width: '80%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
          minHeight: attend === 1 ? '650' : '500',
          borderRadius: '10px',
          padding: '30px',
          boxSizing: 'border-box'
        }} 
      >
        {/* Title */}
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/flower2.png`}
            width='50px'
            height='50px'
            alt=''
          />
          <Typography sx={{ textAlign: 'center' }}  variant="h3" color={'brown.800'} >
                {"RSVP"}       
          </Typography>
          <img
            src={`${process.env.PUBLIC_URL}/images/flower2.png`}
            width='50px'
            height='50px'
            alt=''
          />
        </Box>
          
        {/* Name */}
        <Typography sx={{ textAlign: 'left' }} mt={3} variant="body1" color={'text.black'}>
              Name
        </Typography>
        <Input
          type='text'  
          inputProps={{ maxLength: 70 }}
          onChange={(e)=>{setName(e.target.value)}} 
          value={name}
          onBlur={(e)=>onBlurHandler(e.target.value)}
          error={nameError !== ''}
        />
        <Typography sx={{ textAlign: 'left' }} variant="caption " color={'red'}>
            {nameError}       
        </Typography>
        <Typography sx={{ textAlign: 'right' }} variant="caption" color={'grey.500'}>
          {name.length > 60 && (`(${name.length}/70)`)}
        </Typography>

        {/* Attending */}
        <FormControl fullWidth sx={{marginTop: 4}}>
          <Typography sx={{ textAlign: 'left' }} variant="body1" color={'text.black'}>
            Will you be attending?
          </Typography>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={attend}
            onChange={handleAttendChange}
            sx={{
              display: 'flex',
              justifyContent: { mobile : 'left', laptop: 'space-around' },
              flexDirection: 'row',
            }}
          >
            <FormControlLabel value={1} control={<Radio />} label="Yes, can't wait" />
            <FormControlLabel value={0} control={<Radio />} label="No, can't make it" />
          </RadioGroup>
        </FormControl>
        
        {attend === 1 && (
          <>
          {/* Number of people */}
            <Typography sx={{ textAlign: 'left' }} mt={3} variant="body1" color={'text.black'}>
              Are you bringing +1?  
            </Typography>
            <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={bringingOne}
            onChange={handleBringingOneChange}
            sx={{
              display: 'flex',
              justifyContent: { mobile : 'left', laptop: 'space-around' },
              flexDirection: 'row',
            }}
          >
            <FormControlLabel value={1} control={<Radio />} label="Yes" />
            <FormControlLabel value={0} control={<Radio />} label="No, I am coming alone" />
          </RadioGroup>
            
          </>
        )}
      
      {/* Message */}
      <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            inputProps={{ maxLength: 500 }}
            sx={{marginTop: 3}}
            value={message}
            onChange={e=>setMessage(e.target.value)}
          />
        <Typography sx={{ textAlign: 'right' }} variant="caption" color={'grey.500'}>
              {message.length > 450 && (`(${message.length}/500)`)}
        </Typography>
      <Button 
        variant='body1'
        color={'text.black'} 
        sx={{ marginTop: attend === 1 ? 'auto' : '20px', marginBottom: '20px' }} 
        onClick={confirmSubmit}
        disabled={name === '' || nameError !== ''}
      >
        Submit
          
      </Button>
        
      </Box>
    </Box>
  );
}

export default Rsvp;
