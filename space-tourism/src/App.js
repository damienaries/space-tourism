import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

/**********************
 TODO
    Make home page responsive
 ***********************/

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/destination' component={Destination} />
          <Route exact path='/crew' component={Crew} />
          <Route exact path='/technology' component={Technology} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
