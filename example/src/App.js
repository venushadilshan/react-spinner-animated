import React from 'react'

import './index.css';
import { BarLoader, DoubleBubble, SlidingPebbles, Spinner, DoubleOrbit, HalfMalf, TripleMaze } from 'react-spinner'
import 'react-spinner/dist/index.css'


const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", background: "#1B1A17", flexWrap: "wrap" }}>
      <HalfMalf text="HalfMalf" bgColor={"#fff"} center={false}  width={"150px"} height={"150px"}/>
      <DoubleOrbit text="DoubleOrbit" bgColor={"#fff"} center={false} width={"150px"} height={"150px"} />
      <TripleMaze text="TripleMaze" bgColor={"#fff"} center={false} width={"150px"} height={"150px"} />
      <DoubleBubble text="DoubleOrbit" bgColor={"#fff"} center={false} width={"150px"} height={"150px"} />
      <BarLoader text="BarLoader" bgColor={"#fff"} center={false} width={"150px"} height={"150px"} />
      <SlidingPebbles text="SlidingPebbles" bgColor={"#fff"} center={false} width={"150px"} height={"150px"} />
      <Spinner text="Spinner" bgColor={"#fff"} center={false} width={"150px"} height={"150px"} />

    </div>)
}

export default App
