import React from 'react'


export const BarLoader = (props) => {

    var containerClass = "spinner-container"
    if (props.center === true) {
        var containerClass = "spinner-container"
    }
    else if (props.center === false) {
        var containerClass = "spinner-container-regular"
    }
    return <div className={containerClass} style={{ backgroundColor: props.bgColor}}>

        <svg width="87" height="50" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="loader_bars">
                <g id="upperbar">
                    <rect id="1_2" width="67" height="14" rx="7" fill="#FF72C6" />
                </g>
                <g id="middlebar">
                    <rect id="Rectangle 2" x="20" y="18" width="67" height="14" rx="7" fill="#FF3AB0" />
                </g>
                <g id="bottombar">
                    <rect id="3_2" y="36" width="67" height="14" rx="7" fill="#FD0098" />
                </g>
            </g>
        </svg>
        <p className='text-loading'>{props.text}</p>
    </div>



}

export const DoubleBubble = (props) => {
    var containerClass = "spinner-container"
    if (props.center === true) {
        var containerClass = "spinner-container"
    }
    else if (props.center === false) {
        var containerClass = "spinner-container-regular"
    }
    return <div className={containerClass} style={{ backgroundColor: props.bgColor}}>

        <svg width="100%" viewBox="0 0 248 247" fill="none" xmlns="http://www.w3.org/2000/svg"  >
            <g id="spinner2">
                <g id="outer" >
                    <circle id="Ellipse 1" cx="123.5" cy="124.5" r="104" stroke="#DABDFF" stroke-width="11" />
                    <circle id="Ellipse 2" cx="124" cy="20" r="20" fill="#8C37F7" />
                    <circle id="Ellipse 5" cx="124" cy="227" r="20" fill="#8C37F7" />
                    <circle id="Ellipse 3" cx="228" cy="127" r="20" fill="#8C37F7" />
                    <circle id="Ellipse 4" cx="20" cy="127" r="20" fill="#8C37F6" />
                </g>
                <g id="inner">
                    <circle id="Ellipse 1_2" cx="122.916" cy="125.545" r="61.1714" transform="rotate(32.5155 122.916 125.545)" stroke="#C4C4C4" stroke-width="11" />
                    <circle id="Ellipse 2_2" cx="157.374" cy="72.0558" r="12.1774" transform="rotate(32.5155 157.374 72.0558)" fill="#DABDFF" />
                    <circle id="Ellipse 5_2" cx="89.626" cy="178.335" r="12.1774" transform="rotate(32.5155 89.626 178.335)" fill="#DABDFF" />
                    <circle id="Ellipse 3_2" cx="175.751" cy="161.03" r="12.1774" transform="rotate(32.5155 175.751 161.03)" fill="#DABDFF" />
                    <circle id="Ellipse 4_2" cx="68.958" cy="92.9549" r="12.1774" transform="rotate(32.5155 68.958 92.9549)" fill="#DABDFF" />
                </g>
            </g>
        </svg>
        <p className='text-loading'>{props.text}</p>

    </div>

}


export const SlidingPebbles = (props) => {
    var containerClass = "spinner-container"
    if (props.center === true) {
        var containerClass = "spinner-container"
    }
    else if (props.center === false) {
        var containerClass = "spinner-container-regular"
    }
    return <div className={containerClass} style={{ backgroundColor: props.bgColor }}>

        <svg width="100%" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="slidingpebbles">
                <circle id="left" cx="23" cy="23" r="23" fill="#10CA00" />
                <circle id="right" cx="46" cy="23" r="23" fill="#13EC00" />
            </g>
        </svg>
        <p className='text-loading'>{props.text}</p>
    </div>

}

export const Spinner = (props) => {
    var containerClass = "spinner-container"
    if (props.center === true) {
        var containerClass = "spinner-container"
    }
    else if (props.center === false) {
        var containerClass = "spinner-container-regular"
    }
    return <div className={containerClass} style={{ backgroundColor: props.bgColor }}>

        <svg width="100%" viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g id="spinner">
                <circle id="bottom" cx="138" cy="138" r="114" stroke="#DBDBDB" stroke-width="18" />
                <circle id="upper" cx="138" cy="138" r="123" stroke="#72BBFF" stroke-width="30" stroke-linecap="round" stroke-linejoin="round"
                    stroke-dasharray="373 100" />
            </g>
        </svg>
        <p className='text-loading'>{props.text}</p>
    </div>


}

export const DoubleOrbit = (props) => {
    var containerClass = "spinner-container"
    if (props.center === true) {
        var containerClass = "spinner-container"
    }
    else if (props.center === false) {
        var containerClass = "spinner-container-regular"
    }
    return <div className={containerClass} style={{ backgroundColor: props.bgColor }}>

        <svg width="105" height="88" viewBox="0 0 105 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="doubleorbit">
                <circle id="do2" cx="52.5" cy="41.5" r="12.5" fill="#3F3D3D" />
                <g id="do1">
                    <circle id="Ellipse 6" cx="12.5" cy="41.5" r="12.5" fill="#3F3D3D" />
                    <circle id="Ellipse 8" cx="92.5" cy="41.5" r="12.5" fill="#3F3D3D" />
                </g>
            </g>
        </svg>
        <p className='text-loading'>{props.text}</p>
    </div>


}