// import React, { useRef, useEffect } from "react";
// import MapView from "@arcgis/core/views/MapView"
// import WebMap from "@arcgis/core/WebMap"
import MapComponent from "./MapComponent";
import './App.css'
import HeaderComponent from "./HeaderComponent";
import SidePanel from "./SidePanel";


function App() {
  return (
    <div className={'wrapper'}>
      <div className={'header'}>
        <HeaderComponent title={'CSB Pointstore Dashboard'}/>
      </div>
      <div className={'main'}>
        <MapComponent />
      </div>
      <div className={'sidebar'}>
        <SidePanel/>
      </div>
      <div className={'footer'}></div>
    </div>
  )
}

export default App
