import {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

  const saveData = (data) =>{
    localStorage.setItem('employees', JSON.stringify(data));
  };
  const addEmployee = (employee) => {
  const newEmployee = {
    ...employee,
    EmployeeId: Date.now()
  };

  const updatedEmployees = [...employees, newEmployee];

  setEmployees(updatedEmployees);
  saveData(updatedEmployees);
};

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <EmployeeForm addEmployee={addEmployee} />
            <EmployeeList employees={employees} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;