import './App.css';
import Registration from './routes/Registration/Registration';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
<Route><Header/></Route>
<Route path='/'><Main/></Route>
<Route path='/registration'>
<Registration/>
</Route>
    </div>
  );
}

export default App;