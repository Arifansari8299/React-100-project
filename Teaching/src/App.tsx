import Navbar from "./Topics/Navbar.jsx";
import Functional from "./components/Functional.jsx"
import Greeting from "./components/Greeting.jsx"
import Child from "./components/Prop/Child.jsx"

function App() {
  function showAlert() {
    alert("hello");
  }

  const name = "suman";
  const element = <h2>hello, {name}</h2>;

  return (
    <>
      <div>
        <h1>React Application</h1>
        <button onClick={showAlert}>Click</button>
      </div>
      <h4>{element} Arif How are u</h4>

      {/* components */}
      <Navbar />
      <Functional/>
      <Greeting/>
      {/* props ( short for properties that is used to pass the data from parent to child) */}
      <Child/>
    </>
  );
}

export default App;
