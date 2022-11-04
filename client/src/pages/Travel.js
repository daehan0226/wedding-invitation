import Box from '@mui/material/Box';
import GoogleMapReact from 'google-map-react';


const defaultProps = {
  center: {
    lat: 38.64979946281438,
    lng: -90.26612840337923
  },
  zoom: 11
};

const googleMapApiKey = "AIzaSyCpmHv9f2_7W6kKpYqfa5ZFG0cEzvo8mC4"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Travel() {
  return (
    <Box m={2} sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box style={{ 
        height: '50vh', 
        width: '100%',
        maxWidth: '800px'
      }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapApiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="Venue"
          />
        </GoogleMapReact>
      </Box>  
    </Box>
  );
}

export default Travel;