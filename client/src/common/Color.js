import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const colorNames = [
  'pink',
  'cyan',
  'grey',
  'brown'
]
const colorNumbers = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'A100',
  'A200',
  'A400',
  'A700',
]

let colors = [];
for (const name of colorNames) {
  for (const number of colorNumbers) {
    colors.push({ hex: `${name}.${number}`})
  }
}


function Color() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="body1" color={'text.black'} sx={{backgroundColor:'grey.300'}} mb={2} onClick={()=>setShow(!show)}  >
          {show ? 'hide' : 'show'} color samples
      </Button>
      {show && (<Box mb={1} sx={{ overflowX: 'scroll', display: 'flex' }} >
        {colors.map(({hex}) => (
          <Box 
            key={hex}
            variant="body1" 
            color={'white'} 
            backgroundColor={hex} 
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
              {hex}       
          </Box>     
        ))}          
    </Box>)}
      {show && (
        <Typography variant="body1" color={'text.black'} mb={2}>
          <a
            target="_blank" 
            rel="noreferrer"
            href='https://mui.com/material-ui/customization/color/#main-content'>
              sample colors (click)
          </a>  
        </Typography>
      )}
  </>
  );
}

export default Color;
