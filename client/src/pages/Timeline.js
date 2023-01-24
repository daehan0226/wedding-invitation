import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const timelines = [
  {
    text: 'timeline 1'
  },
  {
    text: 'timeline 2'
  },
  {
    text: 'timeline 3'
  },
  {
    text: 'timeline 4'
  }
]

function TimeLineText({text}) {

  return <Box m={{ mobile: 5, tablet: 6, laptop: 8, desktop: 10}} color={'primary.#4'}>{text}</Box>
}

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
          height={150}
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
          height={150}
          position={"relative"}
        ></Box>
      </Box>    
    )
  );
}

function Timeline() {
  return (
    <>
      <Typography m={3} variant={'h3'} textAlign="center" color="primary.#4" >WEDDING TIMELINE</Typography>
      <Box mt={2} mb={2} sx={{
        position: 'relative',
        height: 600,
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
    </>
  );
}

export default Timeline;