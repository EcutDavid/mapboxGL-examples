import 'normalize.css/normalize.css';

import 'styles/App.scss';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';
const map = new mapboxgl.Map({
    container: 'app',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [121.42, 31.23],
    zoom: 11,
    attributionControl: false
});

map.on('load', () => {
  map.addSource('pointsSource', {
    'type': 'raster',
    'tiles': [
        'http://138.197.215.36:3001/tiles/usepa-pm25/{z}/{x}/{y}.png?token=b65e27836361b643dea20af52c883de917fe3c72'
    ],
    'tileSize': 200
  });

  map.addLayer({
    id: 'points',
    source: 'pointsSource',
    type: 'raster',
    paint: {
    //   'circle-radius': 10,
    //   'circle-color': 'skyblue'
    }
  });
});
