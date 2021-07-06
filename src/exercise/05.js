// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// Basic exercise.
// const lightblueStyle = {
//   backgroundColor: 'lightblue',
//   fontStyle: 'italic',
// };

// const pinkStyle = {
//   backgroundColor: 'pink',
//   fontStyle: 'italic',
// };

// const orangeStyle = {
//   backgroundColor: 'orange',
//   fontStyle: 'italic', 
// };

// const smallBox = (
//   <div className='box box--small' style={lightblueStyle}>
//     small lightblue box
//   </div>
// );

// const mediumBox = (
//   <div className='box box--medium' style={pinkStyle}>
//     medium pink box
//   </div>
// );

// const largeBox = (
//   <div className='box box--large' style={orangeStyle}>
//     large orange box
//   </div>
// );

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// Extra credit 1.
// const Box = (({className, style, ...args}) => {
//   const props = {
//     className: `box ${className}`,
//     style: {fontStyle: 'italic', ...style},
//     ...args,
//   };

//   return <div {...props}></div>;
// });

// function App() {
//   return (
//     <div>
//       <Box
//         className="box--small"
//         style={{backgroundColor: 'lightblue'}}
//       >
//         small lightblue box
//       </Box>

//       <Box
//         className="box--medium"
//         style={{backgroundColor: 'pink'}}
//       >
//         medium pink box
//       </Box>

//       <Box
//         className="box--large"
//         style={{backgroundColor: 'orange'}}
//       >
//         large orange box
//       </Box>
//     </div>
//   )
// }

// Extra credit 2.
const Box = (({size, style, ...args}) => {
  const props = {
    className: `box box--${size}`,
    style: {fontStyle: 'italic', ...style},
    ...args,
  };

  return <div {...props}></div>;
});

function App() {
  return (
    <div>
      <Box
        size="small"
        style={{backgroundColor: 'lightblue'}}
      >
        small lightblue box
      </Box>

      <Box
        size="medium"
        style={{backgroundColor: 'pink'}}
      >
        medium pink box
      </Box>

      <Box
        size="large"
        style={{backgroundColor: 'orange'}}
      >
        large orange box
      </Box>
    </div>
  )
}

export default App;
