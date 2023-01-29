import React, { useEffect } from "react";
import Box from '@mui/material/Box';

const ShowComponent = () =>{
    const [showElement,setShowElement] = React.useState(true)
    useEffect(()=>{
      setTimeout(function() {
        setShowElement(false)
        }, 2000);
    }, [])
        
    return(
      <div>
         {showElement ? (
             <Box 
                sx={{
                    display: { mobile: 'block', laptop: 'none'}
                }}
                >
                <img
                    src={`${process.env.PUBLIC_URL}/images/dance_hug.jpg`}
                    style={{
                        width: '100%',
                        height: '100vh'
                    }}
                    alt=''
                />   
             </Box>
         ) : (
            <></>
         )}
          
      </div>
    )
}

export default ShowComponent