
import './App.css';
import Home from './components/home/Home';
// import Logon from './components/logon/Logon';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Logon/> */}
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
