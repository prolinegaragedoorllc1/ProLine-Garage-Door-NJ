import React, { useEffect, useRef, useState } from 'react';

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
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [MapComponents, setMapComponents] = useState(null);

  // Only load when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Dynamically import leaflet only when needed
  useEffect(() => {
    if (!visible) return;
    import('leaflet/dist/leaflet.css');
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
    ]).then(([rl, L]) => {
      delete L.default.Icon.Default.prototype._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
      setMapComponents({ MapContainer: rl.MapContainer, TileLayer: rl.TileLayer, Polygon: rl.Polygon, Marker: rl.Marker, Popup: rl.Popup });
    });
  }, [visible]);

  return (
    <div ref={containerRef} style={{ height: '180px', width: '100%' }}>
      {visible && MapComponents ? (
        <MapComponents.MapContainer
          center={[40.1, -74.5]}
          zoom={8}
          style={{ height: '180px', width: '100%' }}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
        >
          <MapComponents.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="" />
          <MapComponents.Polygon
            positions={njBorder}
            pathOptions={{ color: '#3b82f6', weight: 2, dashArray: '6, 6', fillColor: '#3b82f6', fillOpacity: 0.08 }}
          />
          <MapComponents.Marker position={businessPosition}>
            <MapComponents.Popup>ProLine Garage Door LLC</MapComponents.Popup>
          </MapComponents.Marker>
        </MapComponents.MapContainer>
      ) : (
        <div style={{ height: '180px', width: '100%', background: '#e2e8f0', borderRadius: '8px' }} />
      )}
    </div>
  );
}