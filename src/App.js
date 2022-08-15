import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<EmployeeList />}></Route>
        <Route path='/' element={<EmployeeList />}></Route>
        <Route path='/employeeList' element={<EmployeeList />}></Route>
        <Route path='/addEmployee' element={<AddEmployee />}></Route>
      </Routes>
    </div>
  );
}

export default App;
