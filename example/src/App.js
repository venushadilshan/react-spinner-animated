import React from 'react'

import './index.css';
import { BarLoader, DoubleBubble, SlidingPebbles, Spinner, DoubleOrbit } from 'react-spinner'
import 'react-spinner/dist/index.css'

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", background:"#1B1A17", width:"100vw" }}>
      <DoubleOrbit text="DoubleOrbit" bgColor={"#fff"} center={false} />
      <Spinner text="Spinner" bgColor={"#fff"} center={false} />
      <SlidingPebbles text="SlidingPebbles" bgColor={"#fff"} center={false} />
      <DoubleBubble text="DoubleBubble" bgColor={"#fff"} center={false} />
      <BarLoader text="BarLoader" bgColor={"#fff"} center={false} />

    </div>)
}

export default App
