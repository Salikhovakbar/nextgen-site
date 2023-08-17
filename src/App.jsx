import './App.css';
import Registration from './routes/Registration/Registration';
import { Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Login from './routes/Login/Login';
function App() {
  return (
    <div className="App">
<Route exact path='/'>
  <Main/>
</Route>
<Route exact path='/registration'>
<Registration/>
</Route>
<Route path='/login/:route'>
<Login/>
</Route>
    </div>
  );
}

export default App;