import { useEffect, useRef, useState } from 'react';

export const useLocations = (locations) => {
  const [activeId, setActiveId] = useState(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href =
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);
    }
    if (!window.L) {
      const script = document.createElement('script');
      script.src =
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = () => setMapReady(true);
      document.head.appendChild(script);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMapReady(true);
    }
  }, []);

  useEffect(() => {
    if (!mapReady || !mapRef.current || mapInstanceRef.current) return;
    const L = window.L;
    const map = L.map(mapRef.current, {
      center: [41.15, 20.17],
      zoom: 7,
      zoomControl: false,
    });
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '',
        subdomains: 'abcd',
        maxZoom: 19,
      },
    ).addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    locations.forEach((loc) => {
      const icon = L.divIcon({
        className: '',
        html: `<div style="width:36px;height:36px;background:#16a34a;border:3px solid #bbf7d0;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 0 0 4px rgba(74,222,128,0.18),0 6px 20px rgba(0,0,0,0.12);display:flex;align-items:center;justify-content:center;"><svg style="transform:rotate(45deg);width:16px;height:16px" viewBox="0 0 24 24" fill="white"><path d="M3 22V8l9-6 9 6v14H3z"/><path d="M9 22V14h6v8" fill="#16a34a"/></svg></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
      });
      const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);
      marker.on('click', () => setActiveId(loc.id));
      markersRef.current[loc.id] = marker;
    });
    mapInstanceRef.current = map;
  }, [mapReady, locations]);

  // Invalidate map on window resize (layout shifts between breakpoints)
  useEffect(() => {
    const onResize = () => {
      if (mapInstanceRef.current) {
        setTimeout(() => mapInstanceRef.current.invalidateSize(), 80);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current || !activeId) return;
    const loc = locations.find((l) => l.id === activeId);
    if (loc)
      mapInstanceRef.current.flyTo([loc.lat, loc.lng], 13, { duration: 1.2 });
  }, [activeId, locations]);

  return { activeId, setActiveId, mapRef };
};
