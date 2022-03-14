import React from 'react'


export const BarLoader = () => {


    return <div className="spinner-container">

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
    </div>



}

export const DoubleBubble = () => {
    return <div className="spinner-container">

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


    </div>

}


export const SlidingPebbles = () => {
    return <div className="spinner-container">

        <svg width="100%" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="slidingpebbles">
                <circle id="left" cx="23" cy="23" r="23" fill="#10CA00" />
                <circle id="right" cx="46" cy="23" r="23" fill="#13EC00" />
            </g>
        </svg>
    </div>

}