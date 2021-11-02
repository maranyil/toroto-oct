import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import geojsonArea from '@mapbox/geojson-area';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFyYW11bGF0byIsImEiOiJja3V5d294NHQxdnBsMndwNmJibDdkbmFxIn0.S45txLTZf7iE7mrY7J4KeA';

const ProjectMap = ({ projects }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng, setLng] = useState(projects.geometry.coordinates[0][3][0]);
  const [lat, setLat] = useState(projects.geometry.coordinates[0][3][1]);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    buildMaps();
  }, []);

  const buildMaps = () => {
    let myGeo = projects.geometry;
    console.log(myGeo);
    //BUILDING PARENT MAP
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/maramulato/cklfvay1616tq17memvcnr4mw',
      center: [lng, lat],
      zoom: zoom,
      maxZoom: 20,
      minZoom: 5,
    });

    map.current.on('load', () => {
      map.current.addSource('maine', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: myGeo,
        },
      });

      // Fill layer
      map.current.addLayer({
        id: 'mainfill',
        type: 'fill',
        source: 'maine',
        layout: {},
        paint: {
          'fill-color': '#ba1863',
          'fill-opacity': 0.3,
        },
      });

      map.current.addLayer({
        id: 'outline',
        type: 'line',
        source: 'maine',
        layout: {},
        paint: {
          'line-color': '#ba1863',
          'line-width': 2,
        },
      });
      let area = geojsonArea.geometry(myGeo).toFixed(2);
      console.log(area);

      map.current.addControl(new mapboxgl.NavigationControl());

      new mapboxgl.Marker({ className: 'marker', color: '#1A30DB' })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ className: 'propups' }).setHTML(
            `<p>Área de proyecto: ${area} m2</p>`
          )
        )
        .addTo(map.current);
    });
  };

  return (
    <div className="map-i-container">
      <h1 className="p-medium">Mapa de obras</h1>
      <div ref={mapContainer} className="map-project" />
    </div>
  );
};

export default ProjectMap;
