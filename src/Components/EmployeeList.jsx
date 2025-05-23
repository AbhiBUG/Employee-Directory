import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    getEmployees();
  }, []);

  return (
    <div className="EmployeeList">
      {employees.length > 0 ? (
        employees.map((emp) => (
          <EmployeeCard
            key={emp.id}
            name={emp.name}
            role={emp.role}
            email={emp.email}
            phone={emp.phone}
          />
        ))
      ) : (
        <p>Loading employees...</p>
      )}
    </div>
  );
}

export default EmployeeList;
