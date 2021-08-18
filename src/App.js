import './App.css';

import Header from './components/Header'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import Load from './components/Loader'
// import SignInPage from './pages/SignInPage';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/explore' component={ExplorePage} />
        <Route path='/load' component={Load} />
        {/* <Route path='/signin' component={SignInPage} /> */}
      </Switch>     
    </div>
  );
}

export default App;
