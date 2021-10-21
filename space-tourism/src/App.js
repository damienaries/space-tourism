import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import { GlobalStyles } from './styles/GlobalStyles';
/**********************
 TODO
    set up router
    create routes
    create site skeleton
 ***********************/

function App() {
  return (
    <Router>
      <GlobalStyles />
      {/* navigation */}
      <Topbar />
      {/* Routing */}
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/destination' component={Destination}/>
        <Route exact path='/crew' component={Crew}/>
        <Route exact path='/technology' component={Technology}/>
      </Switch>
    </Router>
  );
}

export default App;
