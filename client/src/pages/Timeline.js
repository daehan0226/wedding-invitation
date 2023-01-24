import React from 'react'
import Box from '@mui/material/Box';

const timelines = [
  {
    text: '1'
  },
  {
    text: '2'
  },
  {
    text: '3'
  },
  {
    text: '4'
  }
]

function TimeLine({index, info}) {
  return (
    index % 2 === 0 ? (
      <Box sx={{ display: 'flex'}}>
        <Box
          width="50%"
          height={150}
          position={"relative"}
        ></Box>
        <Box
          width="50%"
          height={150}
          position={"relative"}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}
        >
          <Box m={{ mobile: 3, tablet: 6, laptop: 8, desktop: 10}}>{info.text}</Box>
          <Box
            sx={{
              '&::before': {
                content: '""',
                width: "5%",
                height: 2,
                backgroundColor: "#000",
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
          height={150}
          position={"relative"}
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}
        >
        <Box m={{ mobile: 3, tablet: 6, laptop: 8, desktop: 10}}>{info.text}</Box>
          <Box
            sx={{
              '&::before': {
                content: '""',
                width: "5%",
                height: 2,
                backgroundColor: "#000",
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
          height={150}
          position={"relative"}
        ></Box>
      </Box>    
    )
  );
}

function Timeline() {
  return (
    <Box mt={2} mb={2} sx={{
      position: 'relative',
      height: 600,
      '&::before': {
        content: '""',
        display: "block",
        width: 2,
        height: "100%",
        backgroundColor: "#000",
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
  );
}

export default Timeline;