import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

function Rsvp() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const [attend, setAttend] = useState(true);
  const [meal, setMeal] = useState('');

  const handleMealChange = (event) => {
    setMeal(event.target.value);
  };

  
  const handleAttendChange = (event) => {
    setAttend(event.target.value);
  };

  useEffect(()=>{
    setNumberError('')
    if (number && number < 1) {
      setNumberError('Number of Group must be grater than 1')
    }
  },[number])

  
  function onBlurHandler(name) {
    if (name === '') {
      setNameError('You must provide name')
    } else {
      setNameError('')
    }
  }

  function handleSubmit() {
    const data = {
      name,
      number,
      meal,
      attend,
      message
    }
    console.dir(data)
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
          minHeight: '700',
          borderRadius: '10px',
          padding: '10px',
          boxSizing: 'border-box'
        }} 
      >
        <Typography sx={{ textAlign: 'center' }}  variant="h3" color={'brown.800'}>
              {"RSVP"}       
        </Typography>
        <Typography sx={{ textAlign: 'left' }} mt={4} variant="body1" color={'text.black'}>
              Name       
        </Typography>
        <Input
          type='text'  
          onChange={(e)=>{setName(e.target.value)}} 
          value={name}
          onBlur={(e)=>onBlurHandler(e.target.value)}
          error={nameError !== ''}
        />
        <Typography sx={{ textAlign: 'left' }} variant="caption " color={'red'}>
              {nameError}       
        </Typography>
        <Typography sx={{ textAlign: 'left' }} mt={4} variant="body1" color={'text.black'}>
          Number of Group       
        </Typography>
        <Input
          type='number' 
          onChange={(e)=>setNumber(e.target.value)} 
          value={number} 
          error={numberError !== ''} 
        />
        <Typography sx={{ textAlign: 'left' }} variant="caption " color={'red'}>
              {numberError}       
        </Typography>
        <FormControl fullWidth sx={{marginTop: 4}}>
          <InputLabel id="demo-simple-select-label">Meal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            color=""
            value={meal}
            label="Meal"
            onChange={handleMealChange}
          >
            <MenuItem value={"Option1"}>Option1</MenuItem>
            <MenuItem value={"Option2"}>Option2</MenuItem>
            <MenuItem value={"Option3"}>Option3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{marginTop: 4}}>
        <FormLabel>Will you be attending?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={attend}
          onChange={handleAttendChange}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}
        >
          <FormControlLabel value={true} control={<Radio />} label="Yes" />
          <FormControlLabel value={false} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            sx={{marginTop: 4}}
            value={message}
            onChange={e=>setMessage(e.target.value)}
          />
      <Button variant="body1" color={'text.black'} sx={{ marginTop: 'auto', marginBottom: '20px' }} onClick={handleSubmit}  >
          Submit
      </Button>
      </Box>
      
    </Box>
  );
}

export default Rsvp;
