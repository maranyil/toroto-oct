import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFyYW11bGF0byIsImEiOiJja3V5d294NHQxdnBsMndwNmJibDdkbmFxIn0.S45txLTZf7iE7mrY7J4KeA';

const ProjectMap = ({projects}) => {
    const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(projects.geometry.coordinates[0][4][0]);
const [lat, setLat] = useState(projects.geometry.coordinates[0][1][1]);
const [zoom, setZoom] = useState(9);

useEffect(() => {
    buildMaps();
  }, []);

    const buildMaps = () => {
        //BUILDING PARENT MAP
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom,
          maxZoom: 9,
          minZoom: 3,
        });

        map.current.on('load', () => {
            map.current.addSource('maine', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: `${projects.geometry}`,
                }
              })
              
        
              // Outline layer
              map.current.addLayer({
                id: 'mainfill',
                type: 'fill',
                source: 'maine',
                layout: {},
                paint: {
                  'fill-color': '#ba1863',
                  'fill-opacity': 1,
                },
              })
              
          });
    }


   

    return (
        <div className="map-i-container">
           <div ref={mapContainer} className="map-project" /> 
        </div>
    )
}

export default ProjectMap
