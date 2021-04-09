import './App.css';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/explore' component={ExplorePage} />
      </Switch>     
    </div>
  );
}

export default App;
