import { useState, useEffect } from "react";
import React from "react";

export function PreviousHooks() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 10000);
  }, []);
  return <>{render ? <MyComponent></MyComponent> : <div>2nd div</div>}</>;
}

// function MyComponent() {
//   const [count, setCount] = useState(0);  // This is functional component

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={increment}>increment</button>
//     </div>
//   );
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }; //This is class based component (used before functional component came)
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// function MyComponent() {
//   useEffect(() => {
//     //lifecycle events (This is using functional component)
//     console.error("component mounted"); //This will run when the component mounted or the dependency arrey changes but when the dependency arrey changes the return function will called first

//     return () => {
//       console.log("component unmounted"); //This will run when the component unmounted or the dependency arrey changes, This will run first before the function.
//     };
//   }, []);

//   return <div>from inside MyComponent</div>;
// }

class MyComponent extends React.Component {
  //lifecycle events (This is using class based component)
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("component unmounted");
  }

  render() {
    // Render UI
    return <div>hii there</div>;
  }
}
