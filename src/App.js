import logo from './logo.svg';
import './App.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementData, decrementData } from "../src/actions/noteActions";

function App() {
  const myData = useSelector((state) => state.allNotes.data);
  console.log("My Notes", myData);
  const dispatch = useDispatch()


  const handleButtonIncrement=()=> {
   const d=myData+1
    console.log("Click Event Inc ",d);
    dispatch(incrementData(d))
  }

  const handleButtonDecrement=()=> {
    const d=myData-1
    console.log("Click Event DEc ", d);
    dispatch(decrementData(d))
  }


  return (
    <div className="App">
    <h1>Welcome to Redux</h1>
    <h2>Data from Redux Store:{myData}</h2>
    <button onClick={handleButtonIncrement}>Increment</button>
    <button onClick={handleButtonDecrement}>Decrement</button>
    

    </div>
  );
}

export default App;
