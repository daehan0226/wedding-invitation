import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const colors = ['1', '2', '3', '4', '5']


function Color() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="body1" color={'text.black'} sx={{backgroundColor:'grey.300'}} mb={2} onClick={()=>setShow(!show)}  >
          {show ? 'hide' : 'show'} color samples
      </Button>
      {show && (<Box mb={1} sx={{ overflowX: 'scroll', display: 'flex' }} >
        {colors.map((number) => (
          <Box 
            key={number}
            variant="body1" 
            color={'white'} 
            backgroundColor={`primary.#${number}`} 
            mb={2} 
            sx={{
              width: 100, 
              height: 100, 
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
              #{number}       
          </Box>     
        ))}          
    </Box>)}
  </>
  );
}

export default Color;
