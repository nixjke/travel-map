import React from 'react'
import TravelCard from '../components/Card'
import Map from '../components/Map'

export default function TravelMap() {
  return (
    <div className="flex overflow-x-hidden">
      <div className="h-screen overflow-y-scroll w-96">
        <TravelCard />
      </div>
      <Map />
    </div>
  )
}
