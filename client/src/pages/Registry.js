import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link, useMediaQuery } from '@mui/material';


const registryLink = 'https://www.honeyfund.com/site/dycus-brown-10-14-2023'

const registryLinkImages = [
  `${process.env.PUBLIC_URL}/images/registry1.webp`,
  `${process.env.PUBLIC_URL}/images/registry2.webp`
]

function Registry() {
  const isTablet = useMediaQuery('(min-width:600px)');

  return (
    <Box mt={2} mb={2} sx={{
      width: '100%',
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Typography m={{mobile:0.5, laptop:1}} sx={{ fontSize: { mobile: 30, tablet: 35, laptop: 40, desktop: 50}, fontFamily: 'lovely!important;' }} color={'text.white'} >Registry</Typography>
      <Typography m={{mobile:0.5, laptop:1}} sx={{ fontSize: { mobile: 20, tablet: 25, laptop: 30, desktop: 40} }} color={'primary.#6'}>
        We appreciate any gifts toward our Honeymoon or our Homestead fund! Thank you!
      </Typography>

      <Box
        m={2}
        mb={{ mobile: 4, laptop: 6}}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: { mobile: 'center', laptop: 'space-evenly'},
          alignItems: 'center',
          flexDirection: { mobile: 'column', laptop: 'row'}
        }}
      >
        {registryLinkImages.map(i=>(
          <Link key={i} target="_blank" href={registryLink} mt={2}>
          <img
            src={i}
            width={isTablet ? 500 : 250}
            height='auto'
            alt=''
            style={{          
              cursor: 'pointer',
            }}
          /> 
        </Link>
        ))}
      </Box>
      <Typography m={{mobile:0.5, laptop:1}} mb={{ mobile: 2, laptop: 6}} sx={{ fontSize: { mobile: 20, tablet: 25, laptop: 30, desktop: 40} }} color={'primary.#6'}>
        We can't wait to celebrate with you in October!
      </Typography>
    </Box>
  );
}

export default Registry;