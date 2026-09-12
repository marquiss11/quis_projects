import {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState ([]);

  const saveData = (data) =>{
    localStorage.setItem('employees', JSON.stringify(data));
  };
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];

    setEmployees([...employees, employee]);
    saveData(updatedEmployees);
  };

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <EmployeeForm addEmployee={addEmployee} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;