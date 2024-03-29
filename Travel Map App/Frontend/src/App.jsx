import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitute: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      onViewStateChange={nextViewport => setViewport(nextViewport)} 
      />
    </div>
  )
}

export default App
