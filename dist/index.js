function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var BarLoader = function BarLoader(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "87",
    height: "50",
    viewBox: "0 0 87 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "loader_bars"
  }, /*#__PURE__*/React.createElement("g", {
    id: "upperbar"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "1_2",
    width: "67",
    height: "14",
    rx: "7",
    fill: "#FF72C6"
  })), /*#__PURE__*/React.createElement("g", {
    id: "middlebar"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle 2",
    x: "20",
    y: "18",
    width: "67",
    height: "14",
    rx: "7",
    fill: "#FF3AB0"
  })), /*#__PURE__*/React.createElement("g", {
    id: "bottombar"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "3_2",
    y: "36",
    width: "67",
    height: "14",
    rx: "7",
    fill: "#FD0098"
  })))), /*#__PURE__*/React.createElement("p", {
    className: "text-loading"
  }, props.text));
};
var DoubleBubble = function DoubleBubble(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: "0 0 248 247",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "spinner2"
  }, /*#__PURE__*/React.createElement("g", {
    id: "outer"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 1",
    cx: "123.5",
    cy: "124.5",
    r: "104",
    stroke: "#DABDFF",
    "stroke-width": "11"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 2",
    cx: "124",
    cy: "20",
    r: "20",
    fill: "#8C37F7"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 5",
    cx: "124",
    cy: "227",
    r: "20",
    fill: "#8C37F7"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 3",
    cx: "228",
    cy: "127",
    r: "20",
    fill: "#8C37F7"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 4",
    cx: "20",
    cy: "127",
    r: "20",
    fill: "#8C37F6"
  })), /*#__PURE__*/React.createElement("g", {
    id: "inner"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 1_2",
    cx: "122.916",
    cy: "125.545",
    r: "61.1714",
    transform: "rotate(32.5155 122.916 125.545)",
    stroke: "#C4C4C4",
    "stroke-width": "11"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 2_2",
    cx: "157.374",
    cy: "72.0558",
    r: "12.1774",
    transform: "rotate(32.5155 157.374 72.0558)",
    fill: "#DABDFF"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 5_2",
    cx: "89.626",
    cy: "178.335",
    r: "12.1774",
    transform: "rotate(32.5155 89.626 178.335)",
    fill: "#DABDFF"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 3_2",
    cx: "175.751",
    cy: "161.03",
    r: "12.1774",
    transform: "rotate(32.5155 175.751 161.03)",
    fill: "#DABDFF"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 4_2",
    cx: "68.958",
    cy: "92.9549",
    r: "12.1774",
    transform: "rotate(32.5155 68.958 92.9549)",
    fill: "#DABDFF"
  })))), /*#__PURE__*/React.createElement("p", {
    className: "text-loading"
  }, props.text));
};
var SlidingPebbles = function SlidingPebbles(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "46",
    viewBox: "0 0 69 46",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "slidingpebbles"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "left",
    cx: "23",
    cy: "23",
    r: "23",
    fill: "#10CA00"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "right",
    cx: "46",
    cy: "23",
    r: "23",
    fill: "#13EC00"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-loading"
  }, props.text));
};
var Spinner = function Spinner(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    viewBox: "0 0 276 276",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "spinner"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "bottom",
    cx: "138",
    cy: "138",
    r: "114",
    stroke: "#DBDBDB",
    "stroke-width": "18"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "upper",
    cx: "138",
    cy: "138",
    r: "123",
    stroke: "#72BBFF",
    "stroke-width": "30",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-dasharray": "373 100"
  }))), /*#__PURE__*/React.createElement("p", {
    className: "text-loading"
  }, props.text));
};
var DoubleOrbit = function DoubleOrbit(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "105",
    height: "88",
    viewBox: "0 0 105 88",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "doubleorbit"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "do2",
    cx: "52.5",
    cy: "41.5",
    r: "12.5",
    fill: "#3F3D3D"
  }), /*#__PURE__*/React.createElement("g", {
    id: "do1"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 6",
    cx: "12.5",
    cy: "41.5",
    r: "12.5",
    fill: "#3F3D3D"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Ellipse 8",
    cx: "92.5",
    cy: "41.5",
    r: "12.5",
    fill: "#3F3D3D"
  })))), /*#__PURE__*/React.createElement("p", {
    className: "text-loading"
  }, props.text));
};
var HalfMalf = function HalfMalf(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "105",
    height: "105",
    viewBox: "0 0 163 163",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "halfmalf"
  }, /*#__PURE__*/React.createElement("path", {
    id: "hmouter",
    d: "M62.418 131.535C61.247 134.605 62.782 138.075 65.954 138.933C74.0265 141.118 82.492 141.583 90.7963 140.269C101.065 138.645 110.729 134.358 118.826 127.836C126.922 121.314 133.169 112.784 136.942 103.097C140.716 93.409 141.885 82.9016 140.334 72.6214C138.782 62.3411 134.564 52.6468 128.1 44.5042C121.636 36.3616 113.15 30.055 103.49 26.2126C93.8293 22.3702 83.3306 21.1262 73.0396 22.6046C64.7174 23.8001 56.7661 26.7421 49.6978 31.2121C46.9205 32.9685 46.4777 36.7364 48.5026 39.3245V39.3245C50.5275 41.9126 54.2515 42.3327 57.0719 40.6462C62.4685 37.4194 68.4689 35.2833 74.7317 34.3836C82.9645 33.201 91.3635 34.1962 99.0919 37.2701C106.82 40.344 113.608 45.3893 118.78 51.9034C123.952 58.4175 127.326 66.1729 128.567 74.3971C129.808 82.6213 128.873 91.0272 125.854 98.7773C122.835 106.527 117.838 113.351 111.361 118.569C104.884 123.786 97.1522 127.216 88.9371 128.515C82.6877 129.504 76.3242 129.234 70.2156 127.743C67.0232 126.964 63.589 128.464 62.418 131.535V131.535Z",
    fill: "#0085FF"
  }), /*#__PURE__*/React.createElement("path", {
    id: "hminner",
    d: "M68.7623 48.4306C67.7929 45.7067 64.778 44.2547 62.2023 45.5681C57.5054 47.9631 53.3072 51.2626 49.8581 55.2946C45.2706 60.6573 42.1683 67.1285 40.8603 74.0635C39.5523 80.9984 40.0843 88.1551 42.4033 94.8204C44.7223 101.486 48.7472 107.427 54.0772 112.053C59.4073 116.678 65.8562 119.826 72.7817 121.184C79.7072 122.541 86.8675 122.06 93.5491 119.788C100.231 117.517 106.201 113.534 110.864 108.237C114.37 104.254 117.045 99.6333 118.755 94.646C119.693 91.9109 117.831 89.1306 114.997 88.5544V88.5544C112.164 87.9783 109.442 89.8345 108.382 92.5241C107.117 95.7324 105.301 98.7102 103.005 101.318C99.5508 105.242 95.1285 108.192 90.179 109.875C85.2295 111.558 79.9255 111.914 74.7953 110.909C69.6651 109.903 64.888 107.571 60.9397 104.145C56.9914 100.719 54.0099 96.3174 52.2921 91.38C50.5743 86.4425 50.1802 81.1412 51.1491 76.004C52.118 70.8668 54.416 66.0732 57.8143 62.1007C60.0732 59.4601 62.7657 57.2437 65.7638 55.5394C68.2773 54.1105 69.7317 51.1544 68.7623 48.4306V48.4306Z",
    fill: "#55A7F2"
  }))), /*#__PURE__*/React.createElement("p", {
    id: "halfmalf",
    className: "text-loading"
  }, props.text));
};
var TripleMaze = function TripleMaze(props) {
  var containerClass = "spinner-container";

  if (props.center === true) {
    var containerClass = "spinner-container";
  } else if (props.center === false) {
    var containerClass = "spinner-container-regular";
  }

  return /*#__PURE__*/React.createElement("div", {
    className: containerClass,
    style: {
      backgroundColor: props.bgColor,
      width: props.width,
      height: props.height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100",
    height: "90",
    viewBox: "0 0 128 128",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    id: "triplemaze"
  }, /*#__PURE__*/React.createElement("g", {
    id: "tm3"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "path-1-inside-1_109_6",
    fill: "white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M44.0192 114.167C56.303 119.06 69.9548 119.275 82.3869 114.773C94.819 110.271 105.167 101.364 111.47 89.7409C117.773 78.1176 119.592 64.5858 116.583 51.7105C113.574 38.8353 105.945 27.5116 95.1439 19.8858C84.3423 12.2601 71.1183 8.86238 57.9785 10.3368C44.8388 11.8111 32.6967 18.0551 23.8538 27.8852C15.0109 37.7152 10.0818 50.448 10.001 63.6699C9.92017 76.8918 14.6932 89.6839 23.4152 99.6213L31.5322 92.4971C24.5545 84.5471 20.7361 74.3135 20.8008 63.7359C20.8654 53.1584 24.8087 42.9721 31.883 35.1081C38.9573 27.2441 48.671 22.2489 59.1828 21.0694C69.6946 19.8899 80.2738 22.6081 88.9151 28.7087C97.5564 34.8093 103.659 43.8683 106.066 54.1684C108.474 64.4686 107.018 75.2941 101.976 84.5927C96.9338 93.8913 88.6552 101.017 78.7095 104.619C68.7639 108.22 57.8424 108.048 48.0154 104.134L44.0192 114.167Z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44.0192 114.167C56.303 119.06 69.9548 119.275 82.3869 114.773C94.819 110.271 105.167 101.364 111.47 89.7409C117.773 78.1176 119.592 64.5858 116.583 51.7105C113.574 38.8353 105.945 27.5116 95.1439 19.8858C84.3423 12.2601 71.1183 8.86238 57.9785 10.3368C44.8388 11.8111 32.6967 18.0551 23.8538 27.8852C15.0109 37.7152 10.0818 50.448 10.001 63.6699C9.92017 76.8918 14.6932 89.6839 23.4152 99.6213L31.5322 92.4971C24.5545 84.5471 20.7361 74.3135 20.8008 63.7359C20.8654 53.1584 24.8087 42.9721 31.883 35.1081C38.9573 27.2441 48.671 22.2489 59.1828 21.0694C69.6946 19.8899 80.2738 22.6081 88.9151 28.7087C97.5564 34.8093 103.659 43.8683 106.066 54.1684C108.474 64.4686 107.018 75.2941 101.976 84.5927C96.9338 93.8913 88.6552 101.017 78.7095 104.619C68.7639 108.22 57.8424 108.048 48.0154 104.134L44.0192 114.167Z",
    stroke: "#868585",
    "stroke-width": "34",
    mask: "url(#path-1-inside-1_109_6)"
  })), /*#__PURE__*/React.createElement("g", {
    id: "tm2"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "path-2-inside-2_109_6",
    fill: "white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M100.438 70.425C102.011 61.503 100.256 52.3138 95.5059 44.5995C90.7555 36.8851 83.34 31.1817 74.6648 28.5703C65.9897 25.959 56.6579 26.6212 48.4385 30.4316C40.2191 34.2419 33.6833 40.9354 30.0701 49.2433C26.4568 57.5512 26.0172 66.8961 28.8347 75.5065C31.6521 84.1169 37.5307 91.3944 45.3562 95.9595C53.1816 100.525 62.41 102.06 71.2919 100.274C80.1739 98.4889 88.0921 93.5067 93.5456 86.2723L87.6365 81.8179C83.2737 87.6054 76.9391 91.5911 69.8336 93.0195C62.728 94.4478 55.3453 93.2196 49.0849 89.5676C42.8246 85.9155 38.1217 80.0936 35.8677 73.2052C33.6138 66.3169 33.9655 58.841 36.8561 52.1947C39.7467 45.5483 44.9753 40.1935 51.5508 37.1452C58.1263 34.097 65.5917 33.5672 72.5318 35.6563C79.472 37.7453 85.4044 42.3081 89.2047 48.4796C93.0049 54.6511 94.4089 62.0024 93.1503 69.14L100.438 70.425Z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M100.438 70.425C102.011 61.503 100.256 52.3138 95.5059 44.5995C90.7555 36.8851 83.34 31.1817 74.6648 28.5703C65.9897 25.959 56.6579 26.6212 48.4385 30.4316C40.2191 34.2419 33.6833 40.9354 30.0701 49.2433C26.4568 57.5512 26.0172 66.8961 28.8347 75.5065C31.6521 84.1169 37.5307 91.3944 45.3562 95.9595C53.1816 100.525 62.41 102.06 71.2919 100.274C80.1739 98.4889 88.0921 93.5067 93.5456 86.2723L87.6365 81.8179C83.2737 87.6054 76.9391 91.5911 69.8336 93.0195C62.728 94.4478 55.3453 93.2196 49.0849 89.5676C42.8246 85.9155 38.1217 80.0936 35.8677 73.2052C33.6138 66.3169 33.9655 58.841 36.8561 52.1947C39.7467 45.5483 44.9753 40.1935 51.5508 37.1452C58.1263 34.097 65.5917 33.5672 72.5318 35.6563C79.472 37.7453 85.4044 42.3081 89.2047 48.4796C93.0049 54.6511 94.4089 62.0024 93.1503 69.14L100.438 70.425Z",
    stroke: "#868585",
    "stroke-width": "34",
    mask: "url(#path-2-inside-2_109_6)"
  })), /*#__PURE__*/React.createElement("g", {
    id: "tm1"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "path-3-inside-3_109_6",
    fill: "white"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M80.4189 46.2131C76.1861 42.3152 70.6704 40.1059 64.9172 40.0037C59.164 39.9016 53.5732 41.9138 49.2048 45.6589C44.8363 49.404 41.9936 54.6217 41.2157 60.323C40.4378 66.0243 41.7787 71.8128 44.9842 76.5914C48.1897 81.3699 53.037 84.8063 58.6073 86.2492C64.1775 87.6921 70.0836 87.0411 75.2059 84.4197C80.3282 81.7983 84.3107 77.3887 86.3985 72.0267C88.4863 66.6648 88.5343 60.7231 86.5334 55.3281L82.1267 56.9625C83.7275 61.2785 83.6891 66.0318 82.0188 70.3214C80.3486 74.611 77.1625 78.1387 73.0647 80.2358C68.9669 82.3329 64.242 82.8537 59.7858 81.6994C55.3296 80.5451 51.4518 77.7959 48.8874 73.9731C46.323 70.1503 45.2503 65.5194 45.8726 60.9584C46.4949 56.3974 48.769 52.2232 52.2638 49.2271C55.7586 46.231 60.2312 44.6212 64.8337 44.703C69.4363 44.7847 73.8489 46.5522 77.2351 49.6705L80.4189 46.2131Z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M80.4189 46.2131C76.1861 42.3152 70.6704 40.1059 64.9172 40.0037C59.164 39.9016 53.5732 41.9138 49.2048 45.6589C44.8363 49.404 41.9936 54.6217 41.2157 60.323C40.4378 66.0243 41.7787 71.8128 44.9842 76.5914C48.1897 81.3699 53.037 84.8063 58.6073 86.2492C64.1775 87.6921 70.0836 87.0411 75.2059 84.4197C80.3282 81.7983 84.3107 77.3887 86.3985 72.0267C88.4863 66.6648 88.5343 60.7231 86.5334 55.3281L82.1267 56.9625C83.7275 61.2785 83.6891 66.0318 82.0188 70.3214C80.3486 74.611 77.1625 78.1387 73.0647 80.2358C68.9669 82.3329 64.242 82.8537 59.7858 81.6994C55.3296 80.5451 51.4518 77.7959 48.8874 73.9731C46.323 70.1503 45.2503 65.5194 45.8726 60.9584C46.4949 56.3974 48.769 52.2232 52.2638 49.2271C55.7586 46.231 60.2312 44.6212 64.8337 44.703C69.4363 44.7847 73.8489 46.5522 77.2351 49.6705L80.4189 46.2131Z",
    stroke: "#868585",
    "stroke-width": "34",
    mask: "url(#path-3-inside-3_109_6)"
  })))), /*#__PURE__*/React.createElement("p", {
    className: "text-loading"
  }, props.text));
};

exports.BarLoader = BarLoader;
exports.DoubleBubble = DoubleBubble;
exports.DoubleOrbit = DoubleOrbit;
exports.HalfMalf = HalfMalf;
exports.SlidingPebbles = SlidingPebbles;
exports.Spinner = Spinner;
exports.TripleMaze = TripleMaze;
//# sourceMappingURL=index.js.map
