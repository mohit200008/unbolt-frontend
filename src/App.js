import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Drawer from './components/Drawer'

function App() {
  return (
      <Router>
        <Drawer/>
      </Router>
  );
}

export default App;
