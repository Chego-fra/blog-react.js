import './App.css';
import Create from './components/create';
// import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Create/>
    </div>
  );
}

export default App;
