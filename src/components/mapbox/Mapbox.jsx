import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapCard from './MapCard';
import ProjectLink from './ProjectLink';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFyYW11bGF0byIsImEiOiJja3V5d294NHQxdnBsMndwNmJibDdkbmFxIn0.S45txLTZf7iE7mrY7J4KeA';

const Mapbox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lat, setLat] = useState(23.034);
  const [lng, setLng] = useState(-108);
  const [zoom, setZoom] = useState(4.2);
  const OVERVIEW_DIFFERENCE = 6;
  const OVERVIEW_MIN_ZOOM = 3;
  const OVERVIEW_MAX_ZOOM = 19;

  const mapOverviewContainer = useRef(null);
  const mapOverview = useRef(null);

  const buildOverviewZoom = (zoomAmount) => {
    return Math.min(
      Math.max(zoomAmount - OVERVIEW_DIFFERENCE, OVERVIEW_MIN_ZOOM),
      OVERVIEW_MAX_ZOOM
    );
  };

  const buildOverviewBounds = () => {
    // REMOVE OLD BOUNDS
    if (mapOverview.current.getSource('parentOutline')) {
      mapOverview.current.removeLayer('parentOutlineOutline');
      mapOverview.current.removeLayer('parentOutlineFill');
      mapOverview.current.removeSource('parentOutline');
    }
    if (map.current.getZoom().toFixed(2) > 5.25) {
      let bounds = [];
      const parentMapBounds = map.current.getBounds();
      const ne = [parentMapBounds._ne.lng, parentMapBounds._ne.lat];
      const se = [parentMapBounds._ne.lng, parentMapBounds._sw.lat];
      const sw = [parentMapBounds._sw.lng, parentMapBounds._sw.lat];
      const nw = [parentMapBounds._sw.lng, parentMapBounds._ne.lat];
      bounds.push(ne, se, sw, nw, ne);
      mapOverview.current.addSource('parentOutline', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [bounds],
          },
        },
      });

      // New layer to track the map
      mapOverview.current.addLayer({
        id: 'parentOutlineFill',
        type: 'fill',
        source: 'parentOutline', // reference the data source
        layout: {},
        paint: {
          'fill-color': '#ba1863', // blue color fill
          'fill-opacity': 0.3,
        },
      });

      // Outline layer
      mapOverview.current.addLayer({
        id: 'parentOutlineOutline',
        type: 'line',
        source: 'parentOutline',
        layout: {},
        paint: {
          'line-color': '#ba1863',
          'line-width': 1,
        },
      });
    }
  };

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
      maxZoom: 15,
      minZoom: 4,
    });

    // CONTROLS
    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, "top-left");


    //  OVERVIEW MAP
    mapOverview.current = new mapboxgl.Map({
      container: mapOverviewContainer.current,
      style: 'mapbox://styles/maramulato/ckuyyajpf0b4m14o6dhw60150',
      center: [lng, lat],
      zoom: buildOverviewZoom(zoom),
      interactive: false,
      attributionControl: false,
    });

    // BOUNDS ON OVERVIEW
    mapOverview.current.on('load', () => {
      buildOverviewBounds();
    });

    // OVERVIEW MOVEMENT OF PARENT
    map.current.on('load', () => {
      map.current.on('moveend', () => {
        const mapCenter = map.current.getCenter();
        const zoomAmount = map.current.getZoom().toFixed(2);
        setZoom(zoomAmount);

        mapOverview.current.flyTo({
          center: [mapCenter.lng.toFixed(3), mapCenter.lat.toFixed(3)],
          zoom: buildOverviewZoom(zoomAmount),
        });
        buildOverviewBounds();
      });
    });
  };

  return (
    <div className="mapbox-parent-container">
      {/* PARENT MAP */}
      <div ref={mapContainer} className="map-container">
        <MapCard />
        <ProjectLink />
        </div>

      {/* OVERVIEW MAP */}
      <div className="map-overview-container">
        <div ref={mapOverviewContainer} className="map-container"></div>
      </div>
    </div>
  );
};

export default Mapbox;
