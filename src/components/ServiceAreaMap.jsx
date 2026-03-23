import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Approximate NJ border polygon
const njBorder = [
  [41.357, -74.695], [41.357, -74.234], [41.213, -73.893], [41.1, -73.727],
  [40.986, -73.655], [40.752, -73.977], [40.506, -74.010], [40.385, -74.196],
  [39.933, -74.169], [39.617, -74.298], [39.287, -74.574], [38.928, -74.902],
  [38.928, -75.189], [39.382, -75.527], [39.716, -75.578], [40.107, -75.142],
  [40.318, -75.061], [40.477, -74.990], [40.637, -75.193], [41.003, -74.977],
  [41.357, -74.695]
];

const businessPosition = [40.962798, -74.259444];

export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={[40.1, -74.5]}
      zoom={8}
      style={{ height: '180px', width: '100%' }}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
      />
      <Polygon
        positions={njBorder}
        pathOptions={{
          color: '#3b82f6',
          weight: 2,
          dashArray: '6, 6',
          fillColor: '#3b82f6',
          fillOpacity: 0.08,
        }}
      />
      <Marker position={businessPosition}>
        <Popup>ProLine Garage Door LLC</Popup>
      </Marker>
    </MapContainer>
  );
}