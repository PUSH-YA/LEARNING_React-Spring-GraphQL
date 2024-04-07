import React, { Component, useState, useEffect } from 'react';


// using useState and useEffect :===============
const trial = () => {
  // don't need to create state
  // state name, update func, initial value
  const [count, setCount] = useState(0)

  // acts the same ComponentDidMount, triggers after component mounts
  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Counter App</h2>
      {/* can reference the counts directly */}
      <button onClick = {increment}>Clicked {count} times </button>
    </div>
  )
}

// OLD WAY OF WRITING IT :===================
// class App extends Component{
//   state = {
//     count: 0
//   }
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Counter App</h2>
//         <button onClick = {this.increment}>Clicked {this.state.count} times </button>
//       </div>
        
//     )
//   }
// }

export default trial;
