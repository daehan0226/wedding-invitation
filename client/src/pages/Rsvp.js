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
import { Backdrop } from '@mui/material';


const RsvpBackground = () => {
  return (
    <Box
      sx={{
        width: { mobile: '100%'},
        display: { mobile: 'block'},
        position: { mobile: 'absolute' }
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/rsvp.jpg`}
        width='100%'
        alt=''
        style={{
          opacity: '0.6',
          margin: '0 auto',
          minHeight: '800px'
        }}
      />
    </Box>
  )
}


function Rsvp() {
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
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
      Attend: ${attend ? 'Yes': 'No'}
      Message: ${message}
      Song Request: ${request}
    `,
    handleSubmit,
    () => {}
  );

  async function handleSubmit() {
    const newDoc = {
      name,
      numberOfPeople: attend ? (bringingOne + 1) : 0,
      attend,
      message,
      request,
      createdAt: (new Date()).toISOString()
    }
    setLoading(true)
    const result = await createRsvp({ newDoc })
    if (result) {
      navigate('/wedding')
    } else {
      alert('Oops, something went wrong. Try later again.')
    }
    setLoading(false)
  }

  return (
      <>
        <Backdrop
          sx={{ color: '#fff', zIndex: 10000 }}
          open={loading}
        ></Backdrop>
      <Box
        sx={{ 
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }} 
      >
        <RsvpBackground />        
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
          <Typography sx={{ textAlign: 'center' }} mt={8} variant="h3" color={'text.black'} >
                {"RSVP"}       
          </Typography>
        </Box>
          
        {/* Name */}
        <Typography sx={{ textAlign: 'left' }} mt={2} variant="h5" color={'text.black'}>
              Name (both you and any guest)
        </Typography>
        <Input
          type='text'  
          inputProps={{ maxLength: 70 }}
          onChange={(e)=>{setName(e.target.value)}} 
          value={name}
          onBlur={(e)=>onBlurHandler(e.target.value)}
          error={nameError !== ''}
        />
        <Typography sx={{ textAlign: 'left' }} variant="caption" color={'red'}>
            {nameError}       
        </Typography>
        <Typography sx={{ textAlign: 'right' }} variant="caption" color={'grey.500'}>
          {name.length > 180 && (`(${name.length}/200)`)}
        </Typography>

        {/* Attending */}
        <FormControl fullWidth sx={{marginTop: 4}}>
          <Typography sx={{ textAlign: 'left', fontFamily: 'beautiful-simple !important' }} variant="h5" color={'text.black'} >
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
            <Typography sx={{ textAlign: 'left' }} mt={3} variant="h5" color={'text.black'}>
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

        {/** Song request */}
        {attend === 1 ? (
          <>
            <TextField
              id="outlined-multiline-static"
              label="Want to request a song? (Include name and artist)"
              multiline
              rows={2}
              inputProps={{ maxLength: 500 }}
              sx={{marginTop: 4}}
              value={request}
              onChange={e=>setRequest(e.target.value)}
            />
            <Typography sx={{ textAlign: 'right' }} variant="caption" color={'grey.500'}>
              {request.length > 450 && (`(${request.length}/500)`)}
            </Typography>
        </>
      ) : null}
      
      {/* Message */}
      <TextField
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={2}
        inputProps={{ maxLength: 500 }}
        sx={{marginTop: 4}}
        value={message}
        onChange={e=>setMessage(e.target.value)}
      />
      <Typography sx={{ textAlign: 'right' }} variant="caption" color={'grey.500'}>
        {message.length > 450 && (`(${message.length}/500)`)}
      </Typography>

      {attend === 1 ? (
        <Typography mt={3} sx={{ textAlign: 'left' }} variant="body1" color={'text.black'}>
          We are so excited to have you celebrate this day with us! We are asking (if possible) guests bring their favorite alcohol drink to share. Varying beer and wine will also be provided.
        </Typography>
      ) : null}
      <Button 
        size="large"
        sx={{ marginTop: 6 }} 
        onClick={confirmSubmit}
        disabled={name === '' || nameError !== ''}
      >
        {loading ? "Submitting...." : "Submit"}
      </Button>
        
      </Box>
    </Box>
    
    </>
  );
}

export default Rsvp;
