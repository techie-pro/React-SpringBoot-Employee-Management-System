import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList />}></Route>
        <Route path='/' element={<EmployeeList />}></Route>
        <Route path='/employeeList' element={<EmployeeList />}></Route>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
        <Route path='/editEmployee/:id' element={<UpdateEmployee />}></Route>
      </Routes>
    </div>
  );
}

export default App;
