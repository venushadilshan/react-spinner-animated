# react-spinner-animated

> Loader/Spinner Library for React 

[![NPM](https://img.shields.io/npm/v/react-spinner.svg)](https://www.npmjs.com/package/react-spinner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-spinner-animated
```

## Variations

<p float="left"><img src="https://i.ibb.co/j89B7SP/ezgif-2-629b520979.gif" width="600px" >


</p>

 - `<BarLoader/>`
 - `<DoubleBubble>`
 - `<SlidingPebbles/>`
 - `<DoubleOrbit/>`
 - `<Spinner/>`


## Usage

You must import both the Loader/Spinner component and index.css 
<br>i.e - `import 'react-spinner-animated/dist/index.css'`

```jsx

import { BarLoader,DoubleBubble, SlidingPebbles } 
from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css'

class MyComponent extends Component {
  render() {
    return <DoubleOrbit text="Loading..." bgColor={"#F0A500"} center={false}/>
  }
}
```

## Props


Each component has 3 optional props 
- text - Custom text for display with the loader/spinner
  - `<DoubleOrbit text="Loading..."/>`
  - Default: " " (empty)
  -  Acceptable values: String
- bgColor - Background color of the container 
  - `<DoubleOrbit bgColor={"#F0A500"}/>`
  - Default: White
  -  Acceptable values: Any color name of HEX color code
- center - Place the component fixed at the center of the page 
  - `<DoubleOrbit center={false}/>`
  - Default: true
  - Acceptable values: Boolean (true, false)


### See you again with more spinners

## License

MIT © [venushadilshan](https://github.com/venushadilshan)
