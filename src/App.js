import React from "react";
import Header from "./components/Header";
import Text from "./components/Text";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header title="InvoSpark" name="Mohammed" gender="Male" birthYear={1991} />
      <Text />
      <Footer />
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
