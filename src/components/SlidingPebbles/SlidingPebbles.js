import react from "react";
import '../SlidingPebbles/SlidingPebbles.css';

export default function SlidingPebbles(props) {

    return (
        <div className="spinner-container">

            <svg width="100%" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="slidingpebbles">
                    <circle id="left" cx="23" cy="23" r="23" fill="#10CA00" />
                    <circle id="right" cx="46" cy="23" r="23" fill="#13EC00" />
                </g>
            </svg>


            <p>{props.customText}</p>
        </div>

    )
}