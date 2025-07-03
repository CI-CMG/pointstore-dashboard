import React, { useRef, useEffect } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
// import type Map from "@arcgis/core/Map"
import './App.css'


function App() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new WebMap({
        portalItem: {
          id: "43b93cc9be994efbb5a60a2b2d85f151"
        }
      })

      const view = new MapView({
        container: mapDiv.current,
        map: webmap
      })
    }
  }, [mapDiv])

  return (
     <div className="mapDiv" ref={mapDiv}></div>
  )
}

export default App
