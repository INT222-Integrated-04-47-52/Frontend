import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop  from './pages/Shop';
import Contacts from './pages/Contacts';


import Navbar from './pages/NavBar';
import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/Shop" component={Shop}/>
       <Route path="/Contacts" component={Contacts}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
