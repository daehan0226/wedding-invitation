import React from 'react'
import Box from '@mui/material/Box';
import GoogleMapReact from 'google-map-react';
import { GOOGLEMapApiKey } from '../config/config'
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const defaultProps = {
  center: {
    lat: 37.66377,
    lng: -89.22364
  },
  zoom: 13
};

const AnyReactComponent = () => <LocationOnIcon />;

function Travel() {
  return (
    <Box m={2} sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Box mb={2} style={{ 
        height: '50vh', 
        width: '100%',
        maxWidth: '800px'
      }}>
        {/* <Typography mb={{ mobile: 4, laptop: 6}} variant="h4" color={'text.white'} sx={{textAlign: 'center'}} >
          The Wedding Barn at Black Jack Vineyard<a href="https://www.blackjackvineyards.com/" target="_blank" ><InsertLinkIcon color="info" /></a>
        </Typography>
        <Box>
        <img
          src={`${process.env.PUBLIC_URL}/images/venue.jpg`}
            width='100%'
            height='auto'
            alt=''
            style={{
              maxWidth: 600,
              minWidth: 300
            }}
          />
        <FacebookIcon />

        <AirplanemodeActiveIcon /> */}
      {/* </Box> */}
      <Box m={3}
        style={{ 
          height: '50vh', 
          width: '100%',
          maxWidth: '800px'
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLEMapApiKey }}  //  // AIzaSyCpmHv9f2_7W6kKpYqfa5ZFG0cEzvo8mC4
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
          />
        </GoogleMapReact>
      </Box>
      </Box>  
    </Box>
  );
}

export default Travel;