import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
  return (
    <div className="w-full">
      <MapContainer className="w-full h-screen" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}
