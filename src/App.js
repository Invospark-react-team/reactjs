import React from "react";
import Header from "./components/Header";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <Header />
      <User />
    </div>
  );
};

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello From React</h1>
//       </div>
//     );
//   }
// }

export default App;
