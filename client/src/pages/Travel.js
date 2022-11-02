import Box from '@mui/material/Box';
import GoogleMapReact from 'google-map-react';


const defaultProps = {
  center: {
    lat: 38.64979946281438,
    lng: -90.26612840337923
  },
  zoom: 11
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Travel() {
  return (
    <Box m={2} >
      
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCpmHv9f2_7W6kKpYqfa5ZFG0cEzvo8mC4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    </Box>
  );
}

export default Travel;