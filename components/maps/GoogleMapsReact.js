import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMapsReact() {
  const defaultProps = {
    center: {
      lat: -6.193442,
      lng: 106.8956976
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={-6.193442}
          lng={106.8956976}
          text='My Marker'
        />
      </GoogleMapReact>
    </div>
  );
}