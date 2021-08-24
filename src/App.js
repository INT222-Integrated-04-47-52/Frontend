import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop  from './pages/Shop';
import Contacts from './pages/Contacts';
import Footer from './pages/Footer';

import Navbar from './pages/NavBar';
import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './pages/Signin';
import Tailor from './pages/ShopComponent/Tailor';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/Shop" component={Shop}/>
       <Route path="/Contacts" component={Contacts}/>
       <Route path="/SignIn" component={SignIn}/>
       <Route path="/Tailor" component={Tailor}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
