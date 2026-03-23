"use client";

import { useEffect, useRef } from "react";

export default function PropertyDetailMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import leaflet only on client
    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      // Fix default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Create map
      const map = L.map(mapRef.current!, {
        center: [6.4450, 3.5200],
        zoom: 15,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      mapInstanceRef.current = map;

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      // Custom price marker
      const priceIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            background: #1a1f3c;
            color: white;
            font-size: 11px;
            font-weight: 700;
            padding: 5px 12px;
            border-radius: 999px;
            white-space: nowrap;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            font-family: sans-serif;
            cursor: pointer;
          ">4 Bed Duplex · ₦45M</div>
        `,
        iconAnchor: [65, 12],
      });

      // Add marker
      L.marker([6.4450, 3.5200], { icon: priceIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-size:12px;font-weight:600;color:#1a1f3c;min-width:140px">
            7 Bedroom Detached Duplex<br/>
            <span style="font-weight:400;color:#6b7280">Lekki Phase 11, Lagos</span>
          </div>
        `);
    };

    initMap();

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: "100%", height: "280px", borderRadius: "12px", overflow: "hidden" }}
    />
  );
}
