import React from 'react'
import Map from '../components/Map'

export default function TravelMap() {
  return (
    <div className="flex overflow-x-hidden">
      <div className="h-screen overflow-y-scroll w-28 md:w-36 lg:w-40 xl:w-48 2xl:w-56 transition-all">
        <p>Test</p>
      </div>
      <Map />
    </div>
  )
}
