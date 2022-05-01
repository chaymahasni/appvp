import './App.js';
import 'bootstrap'
import NavBar from './component/NavBar.js';
import '../src/component/Home';



function App() {
  

  return (
    <div className="App">

      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;