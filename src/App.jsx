import './App.css';
import Registration from './routes/Registration/Registration';
import { Route } from 'react-router-dom';
import Main from './routes/Main/Main';
import Login from './routes/Login/Login';
import Student from './routes/Student/Student';
import Teacher from './routes/Teacher/Teacher';
function App() {
  return (
    <>
<Route exact path='/'>
  <Main/>
</Route>
<Route exact path='/registration'>
<Registration/>
</Route>
<Route path='/login/:route'>
<Login/>
</Route>
<Route path='/student-cabinet'>
<Student/>
</Route>
<Route path='/teacher-cabinet'>
<Teacher/>
</Route>
    </>
  );
}

export default App;