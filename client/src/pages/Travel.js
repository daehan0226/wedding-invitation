import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


const hotels = [
  { 
    name: "Oak Grove Cabin Rentals", 
    address: "Makanda, IL", 
    distance: "Distance to Wedding venue: 4 Minutes", 
    fullName: "Oak Grove and Walnut Grove Cabins", 
    price: "Range - $200/per night", 
    link: "http://oakgrovecabin.com",
    image: "oak.png"
  },
  { 
    name: "Makanda Inn Bed and Breakfast", 
    address: "Makanda, IL", 
    distance: "Distance to Wedding venue: 9 Minutes", 
    fullName: "Makanda Inn Bed and Breakfast", 
    price: "Range - $150/per night", 
    link: "http://makandainn.com", 
    image: "makandainn.png"
  },
  { 
    name: "Shawnee Hill Bead and Breakfast", 
    address: "Cobden, IL", 
    distance: "Distance to Wedding venue: 12 Minutes", 
    fullName: "Shawnee Hill Bed and Breakfast", 
    price: "Range - $100 - $150/per night", 
    link: "http://shawneehillbb.com", 
    image: "shawneehillbb.png"
  },
  { 
    name: "Home 2 Suites by Hilton", 
    address: "Carbondale, IL", 
    distance: "Distance to Wedding venue: 8 Minutes", 
    fullName: "Home 2 Suites by Hilton", 
    price: "Range - $100 - $150/per night", 
    link: "http://www.hilton.com/en/hotels/mdhcaht-home2-suites-carbondale", 
    image: "hilton.png"
  },
  { 
    name: "Holiday Inn", 
    address: "Carbondale, IL",
    distance: "Distance to Wedding venue: 15 Minutes", 
    fullName: "Holiday Inn Carbondale", 
    price: "Range - $150 - $175/per night", 
    link: "http://www.ihg.com/holidayinn/hotels/us/en/carbondale/mdhci/ hoteldetail?cm_mmc=BingMaps-_-HI-_-US-_-MDHCI",
    image: "holidayinn.png"
  },
  { 
    name: "Airbnb", 
    address: "multiple locations ", 
    distance: "Distance to Wedding venue: varies", 
    fullName: "AirBnb", 
    price: "Range - varies/per night", 
    link: "http://www.airbnb.com/s/Makanda/homes?tab_id=home_tab&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=5&refinement_paths%5B%5D=%2Fhomes&date_picker_type=calendar&checkin=2023-10-13&checkout=2023-10-16&search_type=unknown",
    image: "choice.png"
  },
  { 
    name: "Choice Hotels", 
    address: "multiple locations", 
    distance: "Distance to Wedding venue: varies", 
    fullName: "Choice Hotels", 
    price: "Range - varies/per night", 
    link: "http://www.choicehotels.com/illinois/carbondale/hotels?checkInDate=2023-10-12&checkOutDate=2023-10-16",
    image: "choice.png"
  }
]


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
        <Box mb={3} key={hotel.name} sx={{ 
          width: {mobile: '100%', tablet: '100%'}, display: 'flex', justifyContent: 'space-evenly', flexDirection: {mobile: 'row', tablet: 'row'}, alignItems: 'center' }} >
          <Box sx={{ width: { mobile : 130, tablet: 300, laptop: 400, desktop: 500 }}}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${hotel.image}`}
              width='100%'
              alt={hotel.name}
              style={{
              }}
            />    
          </Box>
          <Box sx={{ width: { mobile : 300, tablet: 400, laptop: 500, desktop: 800}, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography m={1} sx={{ fontSize: { mobile: 14, tablet: 24, laptop: 40, desktop: 50} }} color={'text.white'} >{hotel.name}</Typography>
            <Typography m={1} sx={{ fontSize: { mobile: 10, tablet: 18, laptop: 24, desktop: 30} }} color={'primary.#4'} >{hotel.address}</Typography>
            <Typography m={1} mb={2} sx={{ fontSize: { mobile: 10, tablet: 18, laptop: 24, desktop: 30} }} color={'primary.#4'} >{hotel.price}</Typography>
            <Link target="_blank" mb={1} href={hotel.link} sx={{ fontSize: { mobile: 10, tablet: 18, laptop: 24, desktop: 30}, textDecoration: 'none' }} color={'primary.#6'} >
              {hotel.fullName}
            </Link>
            <Typography m={1} sx={{ fontSize: { mobile: 8, tablet: 16, laptop: 24, desktop: 30} }} color={'primary.#4'}>{hotel.distance}</Typography>
          </Box>
        </Box>
      ))}
      <Box>
      </Box>
    </Box>
  );
}

export default Travel;