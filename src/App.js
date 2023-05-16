import logo from './logo.svg';
import './App.css';
import Buttons from './buttons';


function App() {
  function greet(data) {
    console.log("I am inside my parent component")
    console.log(data)
  }
  function bye(data) {
    console.log("Thank you for having us")
  }
  return (
    <div className="App">
      <Buttons click={"Greet"} fun={greet} />
      {/* <Buttons click={"Bye"} fun={bye} /> */}
    </div>
  );
}

export default App;
