import './contact-map.scss';
import React, { useState } from 'react';
import {
  Map,
  GoogleApiWrapper,
  InfoWindow,
  Marker,
  IProvidedProps,
} from 'google-maps-react';

interface IGoogleMapProps extends IProvidedProps {
  showingInfoWindow?: boolean;
  activeMarker?: google.maps.Marker;
  selectedPlace?: {};
  map?: {};
}

const ContactMap: React.FC<IGoogleMapProps> = (props) => {
  const [googleState, setGoogleState] = useState<IGoogleMapProps>({
    showingInfoWindow: true,
    activeMarker: new google.maps.Marker(),
    selectedPlace: {
      lng: -117.83038368532272,
      lat: 33.68634813659506,
    },
    map: {},
    google,
  });

  /***** Google Map API handlers* ***/
  const onMarkerClick = (props, e, marker): void => {
    setGoogleState({
      ...googleState,
      activeMarker: marker,
    });
  };
  const onClose = (props) => {
    if (googleState.showingInfoWindow) {
      setGoogleState({
        showingInfoWindow: false,
        activeMarker: null,
        google,
      });
    }
  };
  const mapStyles = {
    width: '100%',
    height: '350px',
    position: 'relative',
  };

  return (
    <>
      <Map
        google={googleState.google}
        zoom={14}
        style={mapStyles}
        disableDefaultUI={true}
        initialCenter={{
          lng: -117.83038368532272,
          lat: 33.68634813659506,
        }}
        onReady={(mapProps, map) => {
          setGoogleState({
            ...googleState,
            map: map,
          });
        }}
      >
        <Marker onClick={onMarkerClick} />
        {googleState.map && googleState.activeMarker && (
          <InfoWindow
            google={googleState.google}
            visible={googleState.showingInfoWindow}
            marker={
              new google.maps.Marker({
                position: {
                  lng: -117.83038368532272,
                  lat: 33.68634813659506,
                },
                map: googleState.map as google.maps.Map,
              })
            }
            map={googleState.map as google.maps.Map}
          >
            <p className="my-1">
              {console.log(googleState)}
              <strong>Zymo Ressearch </strong>
            </p>
            <p>17062 Murphy Ave, Irvine, CA 92614</p>
          </InfoWindow>
        )}
      </Map>
    </>
  );
};

export const GoogleContactUs = GoogleApiWrapper({
  apiKey: 'AIzaSyBUeUMomDZds2PgEKa5G0LRLo-FeZrJhbU',
})(ContactMap);
