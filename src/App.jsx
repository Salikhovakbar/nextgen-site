import './App.css';
import Registration from './routes/Registration/Registration';
import { Route } from 'react-router-dom';
import Main from './routes/Main/Main';
function App() {
  return (
    <div className="App">
<Route exact path='/'>
  <Main/>
</Route>
<Route exact path='/registration'>
<Registration/>
</Route>
    </div>
  );
}

export default App;