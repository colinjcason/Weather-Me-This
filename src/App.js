import './App.css';
import useDarkMode from './hook/useDarkMode'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
// import SignInPage from './pages/SignInPage';
import { Switch, Route } from 'react-router-dom'

function App() {
  useDarkMode()

  return (
    <div className='dark:bg-gray-800 dark:text-gray-50 transition duration-500'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/explore' component={ExplorePage} />
        {/* <Route path='/signin' component={SignInPage} /> */}
      </Switch>     
    </div>
  );
}

export default App;
