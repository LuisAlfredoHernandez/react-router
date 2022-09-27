import './App.css';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/Prueba">Prueba</Link>
    </div>
  );
}

export default App;
