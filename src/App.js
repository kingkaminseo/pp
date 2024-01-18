import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <div className="App" style={{border : '1px solid red', overflow : 'hidden'}}>
        <TopNavbar />
        <Main/>
        <About/>
    </div>
  );
}

export default App;
