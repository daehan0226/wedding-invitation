import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import { GOOGLEMapApiKey } from '../config/config';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Link from '@mui/material/Link';
const VENUE = 'The Wedding Barn at Black Jack Vineyard'
const defaultProps = {
  center: {
    lat: 37.66377,
    lng: -89.22364
  },
  zoom: 13
};

const AnyReactComponent = () => <div style={{width: '300px'}}><LocationOnIcon /><Typography>{'Here'}</Typography></div>;


const timelines = [
  {
    text: 'Arrival 3:00 PM'
  },
  // {
  //   text: 'Paducah Singers \n 3:10 PM'
  // },
  {
    text: 'Wedding 3:15 PM'
  },
  {
    text: 'Food 3:30pm'
  },
  {
    text: 'Lets get this \n party started \n to 10:00 PM'
  }
]

function TimeLineText({text}) {

  return <Box m={{ mobile: 3, tablet: 6, laptop: 8, desktop: 10}} sx={{ whiteSpace: 'pre'}} >
    <Typography fontSize={{mobile: 18, tablet: 26, laptop: 32}} textAlign="center" color="primary.#6" >
    {text}
    </Typography>
  </Box>
    
}

function TimeLine({index, info}) {
  return (
    index % 2 === 0 ? (
      <Box sx={{ display: 'flex'}}>
        <Box
          width="50%"
          height={{mobile: 70, lpatop: 100}}
          position={"relative"}
        ></Box>
        <Box
          width="50%"
          height={{mobile: 70, lpatop: 100}}
          position={"relative"}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}
        >
          <TimeLineText text={info.text} />
          <Box
            sx={{
              '&::before': {
                content: '""',
                width: { mobile: 20, tablet: 30, laptop: 40, desktop: 50},
                height: 2,
                backgroundColor: 'primary.#4',
                margin: "auto 0",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
              }
            }}
            >
            </Box>
        </Box>
      </Box>    
    ) : (
      <Box sx={{ display: 'flex'}}>
        <Box
          width="50%"
          height={{mobile: 70, lpatop: 100}}
          position={"relative"}
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}
        >
        <TimeLineText text={info.text} />
        <Box
          sx={{
            '&::before': {
              content: '""',
              width: { mobile: 20, tablet: 30, laptop: 40, desktop: 50},
              height: 2,
              backgroundColor: 'primary.#4',
              margin: "auto 0",
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
            }
          }}
          >
          </Box>
        </Box>
        <Box
          width="50%"
          height={{mobile: 70, lpatop: 100}}
          position={"relative"}
        ></Box>
      </Box>    
    )
  );
}

function Timeline() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
      <Box sx={{position: 'absolute', right: '0px', width: { mobile: '100%'}, zIndex: -1, height: 150, top: '0px' }} >
        <img
          src={`${process.env.PUBLIC_URL}/images/branch.png`}
          width='100%'
          height={300}
          alt='branch'
        />
      </Box>
      <Typography mb={3} mt={20} fontSize={{mobile: 32, tablet: 40, laptop: 50}} textAlign="center" color="primary.#4" sx={{fontFamily: 'lovely!important;'}} >Wedding Timeline</Typography>
      <Box mt={2} mb={2} sx={{
        position: 'relative',
        height: {mobile: 280, laptop: 400},
        '&::before': {
          content: '""',
          display: "block",
          width: 2,
          height: "100%",
          backgroundColor: 'primary.#4',
          margin: "0 auto",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0
        }
      }}>
        {timelines.map((info, index)=> (
          <TimeLine key={index} index={index} info={info} ></TimeLine>
        ))}
        </Box>
      <Box m={2}>
        <Typography display={"inline"} variant={'h4'} textAlign="center" color="primary.#6" >
          {"Food served "}
        </Typography>
        <Typography display={"inline"} variant={'h5'} textAlign="center" color="primary.#4" >
          will be Chili (veggie option), Brisket, Nacho Bar, and light appetizers.
        </Typography>      
      </Box>
      <Box m={2}>
      <Typography variant={'h4'} display={"inline"} textAlign="center" color="primary.#6" >
        {"Alcohol served "}
      </Typography>
      <Typography variant={'h5'} display={"inline"} textAlign="center" color="primary.#4" >
        will be Beer and Wine (varying kinds.) We are asking that guests bring a favorite Alcohol of theirs to the party to share
      </Typography>
       
      </Box>
      <Box>
      <Typography variant={'h4'} textAlign="center" color="primary.#6" >
        Sunday: October 15th
      </Typography>  
      <Typography m={1} variant={'h5'} textAlign="center" color="primary.#4" >
        There will be a pick up game of ultimate frizbee at the SIU fields time to be determined.
      </Typography>  
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: {mobile: "90%", laptop: "70%" }}} >
        <img
          src={`${process.env.PUBLIC_URL}/images/circle.png`}
          width={"100%"}
          alt=''
          style={{
            borderRadius: '50%'
          }}
        />
      </Box>
      <Box mt={2} mb={2} sx={{ textAlign: 'center'}}>

      <Link 
          href="https://www.blackjackvineyards.com/" 
          target="_blank"
          mb={{ mobile: 4, laptop: 6}} 
          variant="h4" 
          color={'primary.#4'} 
          sx={{
            fontFamily: 'beautiful-simple !important',
            marginTop: 2,
            display: 'block',
            textDecoration: "none",
            boxShadow: "none"
          }}
        >
          {VENUE}
        </Link>
        
      <Box mt={2} mb={2} sx={{ 
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: {mobile: 'column', laptop:'row'},
        justifyContent: 'space-evenly',
        alignItems: 'center'
      }}>
        <Box
          m={1}
          width={{ mobile: '90%', laptop: 500, desktop: 600 }}
          height={{ mobile: 'auto', laptop: 600, desktop: 700 }}
          >
          <img
            src={`${process.env.PUBLIC_URL}/images/barn.jpg`}
              width='100%'
              height='100%'
              alt='barn'
            />
        </Box>
        <Box
          width={{ mobile: '90%', laptop: 500, desktop: 600 }}
          height={{ mobile: '500px', laptop: 600, desktop: 700 }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}  //  // AIzaSyCpmHv9f2_7W6kKpYqfa5ZFG0cEzvo8mC4
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {/* <AnyReactComponent
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
            /> */}
          </GoogleMapReact>
        </Box>
      </Box>
      <Typography sx={{
            fontFamily: 'beautiful-simple !important',
            color:'primary.#4',
            marginTop: 1,
            marginBottom: 2
           }}
      >
        66 Rifle Range Road, Makanda, IL 62958
      </Typography>
      
      </Box>
    </Box>
  );
}

export default Timeline;