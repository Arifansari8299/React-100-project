import Navbar from "./Topics/Navbar.jsx";
import Functional from "./components/Functional.jsx"
import Greeting from "./components/Greeting.jsx"
import Child from "./components/Prop/Child.jsx"
import Child1 from "./components/Prop/Child1.jsx"

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
      <Child object = "bag"/>
      <Child object="umbrella"/>
      <Child object="fan"/>
      <Child object="laptop"/>
      {/* props with destructuring */}
      <Child1 name="Mohd owais" address="Gonda" age = {24} profession = "Software Development Engineer"/>
      <Child1 name="Mohd Arif" address="Gonda" age = {24} profession = "Software Development Engineer"/>
      <Child1 name="Mohd Adil" address="Gonda" age = {24} profession = "Software Development Engineer"/>
      <Child1 name="Mohd sarfraj" address="Gonda" age = {24} profession = "Software Development Engineer"/>
      <Child1 name="Mohd Afzal" address="Gonda" age = {24} profession = "Software Development Engineer"/>
      <Child1 name="Mohd zeeshan" address="Gonda" age = {24} profession = "Software Development Engineer"/>

    </>
  );
}

export default App;
