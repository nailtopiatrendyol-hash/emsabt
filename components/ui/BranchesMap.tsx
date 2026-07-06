"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { branches } from "@/lib/content";

const pinIcon = L.divIcon({
  className: "",
  html: `
    <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.4 17 27 17 27s17-14.6 17-27C34 7.6 26.4 0 17 0Z" fill="#d21404"/>
      <circle cx="17" cy="17" r="7" fill="#ffffff"/>
    </svg>`,
  iconSize: [34, 44],
  iconAnchor: [17, 44],
  popupAnchor: [0, -40],
});

export function BranchesMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> katkıda bulunanları',
      maxZoom: 18,
    }).addTo(map);

    const markers = branches.map((branch) => {
      const query = encodeURIComponent(`${branch.name} ${branch.address}`);
      const marker = L.marker([branch.lat, branch.lng], { icon: pinIcon }).addTo(map);
      marker.bindPopup(
        `<div style="font-family:inherit;min-width:180px">
          <p style="margin:0 0 4px;font-weight:700;color:#17181c">${branch.name}</p>
          <p style="margin:0 0 8px;color:#52545c;font-size:12.5px;line-height:1.4">${branch.address}</p>
          <a href="https://www.google.com/maps/search/?api=1&query=${query}" target="_blank" rel="noopener noreferrer" style="color:#d21404;font-weight:600;font-size:12.5px;text-decoration:none">Yol tarifi al →</a>
        </div>`
      );
      return marker;
    });

    const bounds = L.latLngBounds(markers.map((m) => m.getLatLng()));
    map.fitBounds(bounds, { padding: [40, 40] });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-hairline)] grayscale-[15%]"
    />
  );
}
