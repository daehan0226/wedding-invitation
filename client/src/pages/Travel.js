import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GoogleMapReact from 'google-map-react';
import { GOOGLEMapApiKey } from '../config/config'
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


const VENUE = 'The Wedding Barn at Black Jack Vineyard'

const defaultProps = {
  center: {
    lat: 37.66377,
    lng: -89.22364
  },
  zoom: 13
};

const AnyReactComponent = () => <div style={{width: '300px'}}><LocationOnIcon /><Typography>{VENUE}</Typography></div>;

function Travel() {
  return (
    <Box mt={2} mb={2} sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Box mt={2} mb={2} sx={{ 
        width: { mobile: '100%', tablet: '80%', laptop: '60%'},
        textAlign: 'center'
      }}>

        <Link 
          href="https://www.blackjackvineyards.com/" 
          target="_blank"
          mb={{ mobile: 4, laptop: 6}} 
          variant="h4" 
          color={'primary.#4'} 
          sx={{
            fontFamily: 'beautiful-simple !important',
            margin: 4,
            display: 'block',
            textDecoration: "none",
            boxShadow: "none"
          }}
        >
          {VENUE}
        </Link>
        <Box m={2}>
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
        {/* <AirplanemodeActiveIcon /> */}
      </Box>
      <Typography sx={{
            fontFamily: 'beautiful-simple !important' }}
      >
        66 Rifle Range Road, Makanda, IL 62958
      </Typography>
      <Box
        mt={2}
        style={{ 
          height: '50vh', 
          width: '100%',
          // maxWidth: '800px'
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