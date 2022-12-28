import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { useConfirm } from '../hooks/useConfrim'
import { useEffect, useState } from 'react';
import { createRsvp } from '../helper/api';
import { useNavigate } from 'react-router-dom';


function Rsvp() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [bringingOne, setBringingOne] = useState(0);
  const [attend, setAttend] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
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

  async function handleSubmit() {
    const newDoc = {
      name,
      numberOfPeople: attend === 1 ? bringingOne : 0,
      attend: attend === 1,
      message,
      createdAt: (new Date()).toISOString()
    }
    setLoading(true)
    const result = await createRsvp({ newDoc })
    if (result) {
      navigate('/travel')
    } else {
      alert('Oops, something went wrong. Try later again.')
    }
    setLoading(false)
  }

  return (
      <Box
        sx={{ 
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }} 
      >
        <Box
          sx={{
            width: { mobile: '100%', tablet: '600px'},
            display: { mobile: 'block', tablet: 'none'},
            position: { mobile: 'absolute', tablet: 'none'}
          }}
        >
          <img
              src={`${process.env.PUBLIC_URL}/images/ring1.jpg`}
              width='100%'
              height='450px'
              alt=''
              style={{
                opacity: '0.6',
                margin: '0 auto'
              }}
            />
        </Box>

        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          zIndex: 100,
          maxWidth: '800px',
          minWidth: '300px',
          width: '90%',
          margin: '0 auto'
        }}>
          
        {/* Title */}
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
            maxWidth: '800px',
            margin: { mobile: '0', tablet: '0 auto'}
          }}
        >
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/flower2.png`}
            width='50px'
            height='50px'
            alt=''
          /> */}
          <Typography sx={{ textAlign: 'center' }} mt={1} variant="h5" color={'brown.800'} >
                {"RSVP"}       
          </Typography>
          {/* <img
            src={`${process.env.PUBLIC_URL}/images/flower2.png`}
            width='50px'
            height='50px'
            alt=''
          /> */}
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
          <Typography sx={{ textAlign: 'left' }} variant="body1" color={'text.black'} sx={{ 
                fontFamily: 'beautiful-simple !important'}}>
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
            rows={2}
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
        {loading ? "Submitting...." : "Submit"}
      </Button>
        
      </Box>
      </Box>
  );
}

export default Rsvp;
