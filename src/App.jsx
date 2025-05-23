import React, { useState } from "react";
import EmployeeList from './Components/EmployeeList.jsx'
import Employee from './Components/Employee.jsx'
import {v4 as uuidv4} from 'uuid';

const IsEmployee = true;


function App() {
  const [role, setRole]=useState('Developer');

const [employees, setEmployee] = useState([
  {
    name: "Goku",
    designation: "Networking Jerk",
    img: "Goku.png"
  },

  {
    name: "Luffy",
    designation: "HR",
    img: "Luffy.png"
  },

  {
    name: "Saitama",
    designation: "Developer",
    img: "Saitama.png"
  },

  {
    name: "Zoro",
    designation: "Manager",
    img: "Zoro.png"
  },


  {
    name: "Chhota Bheem",
    designation: "CEO",
    img: "CB.png"
  }

]
  
);



  return(
  
    <div className="App">
    {console.log('Inside the Terminal')}
    {
      
      IsEmployee?(
        <>
        <input type="text" onChange={
          (e)=>{
            console.log(e.target.value);
           // role = e.target.value;
           setRole(e.target.value);
          }
        }
        />
        <div className="flex flex-wrap justify-center">
         { employees.map((employee)=>
          (
            <Employee 
            key={uuidv4()}
            name={employee.name}
            designation={employee.designation}
            img={employee.img}
            />
            )
          )
         }
          </div>
          </>
          
          ):(<p>Cannot See the Employee</p>)

      
    } 
     </div>
   
    
  );
}

export default App;
