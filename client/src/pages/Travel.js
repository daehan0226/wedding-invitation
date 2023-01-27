import React from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GoogleMapReact from 'google-map-react';
import { GOOGLEMapApiKey } from '../config/config'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';


const AIRBNB_LINK = "https://www.airbnb.com/s/Makanda/homes?tab_id=home_tab&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=5&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&checkin=2023-10-13&checkout=2023-10-16&search_type=unknown" 
const defaultProps = {
  center: {
    lat: 37.66377,
    lng: -89.22364
  },
  zoom: 13
};

const hotels = [
  {
    name: "Oak Grove Cabin Rentals",
    address: "Southern Illinois",
    distance: "Distance to Wedding venue: 4 Minutes",
    fullName: "Oak Grove and Walnut Grove Cabins",
    price: "Range - $200/per night",
    link: "oakgrovecabin.com"
  },
  {
    name: "Makanda Inn Bed and Breakfast ",
    address: "Southern Illinois | Shawnee National Forest",
    distance: "Distance to Wedding venue: 9 Minutes",
    fullName: "Makanda Inn (9 rooms)",
    price: "Range - $150/ per night suite",
    link: "oakgrovecabin.com"
  },
]


const AnyReactComponent = () => <div style={{width: '300px'}}><LocationOnIcon /><Typography>{'Here'}</Typography></div>;


function Travel() {
  return (
    
    <Box mt={2} mb={2} sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      {hotels.map(hotel=> (
        <Box key={hotel.name} sx={{ 
          width: '90%', display: 'flex', justifyContent: 'space-around', flexDirection: {mobile: 'column', laptop: 'row'}, alignItems: 'center' }} >
          <Box sx={{ width: { mobile : '90%', latop: 450, desktop: 500} }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/hotels.jpg`}
              width='100%'
              alt={hotel.name}
              style={{
              }}
            />    
          </Box>
          <Box sx={{ width: { mobile : '90%', latop: 450, desktop: 500} }}>
            <Typography m={1} variant={'h3'} >{hotel.name}</Typography>
            <Typography m={1} variant={'h3'} >{hotel.address}</Typography>
            <Typography m={1} variant={'h3'} >{hotel.price}</Typography>
            <Typography m={1} variant={'h3'} >{hotel.fullName}</Typography>
            <Typography m={1} variant={'h3'} >{hotel.distance}</Typography>
          </Box>
        </Box>
      ))}
      <Box>

      </Box>
      <Link 
          href={AIRBNB_LINK}
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
          airbnb
        </Link>     
    </Box>
  );
}

export default Travel;

{/* <Box mt={2} mb={2} sx={{ 
        width: { mobile: '100%', tablet: '80%', laptop: '60%'},
        textAlign: 'center'
      }}>
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
      </Box>   */}