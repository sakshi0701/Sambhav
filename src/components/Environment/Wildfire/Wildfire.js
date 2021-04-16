import { useState, useEffect } from 'react'
import Map from './Map'

function WildFire() {
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Map eventData={eventData} />
    </div>
  );
}

export default WildFire;

