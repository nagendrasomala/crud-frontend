
import './App.css';
import { HashRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import CreateStudent from "./components/createStudent";
import StudentList from "./components/studentList";
import EditStudent from './components/EditStudent';
function App() {
  return (
    <div className='container'>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<CreateStudent/>}/>
          <Route path="/create-student" element={<CreateStudent/>}/>
          <Route path="/student-list" element={<StudentList/>}/>
          <Route path='/edit-student/:id' element={<EditStudent/>}/>
        </Routes>
      </HashRouter>


    </div>
    
  );
}

export default App;
