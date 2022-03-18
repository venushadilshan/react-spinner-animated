import React from 'react'

import './index.css';
import { BarLoader, DoubleBubble, SlidingPebbles, Spinner, DoubleOrbit, HalfMalf, TripleMaze } from 'react-spinner'
import 'react-spinner/dist/index.css'


const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", background: "#1B1A17", flexWrap: "wrap" }}>
      <HalfMalf text="HalfMalf" bgColor={"#fff"} center={false} />
      <DoubleOrbit text="DoubleOrbit" bgColor={"#fff"} center={false} />
      <Spinner text="Spinner" bgColor={"#fff"} center={false} />
      <SlidingPebbles text="SlidingPebbles" bgColor={"#fff"} center={false} />
      <DoubleBubble text="DoubleBubble" bgColor={"#fff"} center={false} />
      <BarLoader text="BarLoader" bgColor={"#fff"} center={false} />
      <TripleMaze text="TripleMaze" bgColor={"#fff"} center={false} />


    </div>)
}

export default App
