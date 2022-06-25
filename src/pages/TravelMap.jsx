import Map from '../components/Map'
import TravelCard from '../components/TravelCard'

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
