# react-spinner-animated

> Loader/Spinner Library for React 

[![NPM](https://img.shields.io/npm/v/react-spinner.svg)](https://www.npmjs.com/package/react-spinner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br>

## Customize Your Spinner/Loader

<a href="https://react-spinner-animated-demo.vercel.app/">  
Create your spinner/Loader </a>

<br>

## Install

```bash
npm i react-spinner-animated
```

## Variations

<p float="left"><img src="https://i.ibb.co/YT6bwzL/2022-03-18-18-36-17.gif" width="600px" >


</p>

 - `<BarLoader/>`
 - `<DoubleBubble>`
 - `<SlidingPebbles/>`
 - `<DoubleOrbit/>`
 - `<Spinner/>`
 - `<HalfMalf/>`
 - `<TripleMaze/>`


## Usage

You must import both the Loader/Spinner component and index.css 
<br>i.e - `import 'react-spinner-animated/dist/index.css'`

```jsx

import { BarLoader,DoubleBubble, SlidingPebbles } 
from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css'

class MyComponent extends Component {
  render() {
    return <DoubleOrbit text={"Loading..."} bgColor={"#F0A500"} 
    center={false} width={"150px"} height={"150px"}/>
  }
}
```

## Props

<table border="1">
<tr>
<th>Prop</th>

<th>Usage</th>
<th>Default</th>
<th>Type</th>
</tr>

<tr>
<td>text </td>
<td> Custom text for display with the loader/spinner</td>
<td> " "</td>
<td> Strings</td>
</tr>

<tr>
<td>bgColor </td>
<td> Custom text for display with the loader/spinner</td>
<td> White</td>
<td> Any color name or HEX color code</td>
</tr>

<tr>
<td>width </td>
<td> width of the container </td>
<td> -</td>
<td> pixels (150px)</td>
</tr>

<tr>
<td>height </td>
<td> height of the container </td>
<td> -</td>
<td> pixels (150px)</td>
</tr>

<tr>
<td>center </td>
<td> Place the component fixed at the center of the page </td>
<td> true</td>
<td> Boolean (true, false)</td>
</tr>


</table>

<hr>

<br>


### See you again with more spinners

## License

MIT © [venushadilshan](https://github.com/venushadilshan)
