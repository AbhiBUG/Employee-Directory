import React, { useState } from "react";
import EmployeeList from '../Components/EmployeeList.jsx'
import Employee from '../Components/Employee.jsx'
import Filter from '../Components/Filter.jsx'
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom';
import Notification  from './Notification.jsx'

const IsEmployee = true;


function Home() {
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

const navigate = useNavigate();

const handlenotification = () =>
{
navigate('/notification');
};

  return(

    <div className="App bg-white h-screen p-2">
        
    <div className="TopOptions bg-white h-[30px] bg-pink-500 flex flex-row justify-end">
    <img src="/icons/edit.png" className="cursor-pointer"></img>
    <img src="/icons/notification.png" onClick={handlenotification} className="cursor-pointer"></img>
    </div>

   

    <div className="SearchView h-[30px] bg-white flex flex-row justify-between mt-2 rounded-xl shadow-md">
    
        <div  className="flex flex-row border-2 w-100 mr-5">
        <input type="text" className="w-200 border-2 rounded-lg pl-2" placeholder="Search"></input>
        <b><p className="ml-4">People</p></b>
        </div>

        <img src="/icons/filter.png" className="cursor-pointer" onClick={<Filter/>}></img>
    </div>
     <div className="FilterView  h-[30px] bg-yellow-500 flex flex-row">
    <p>THis is FilterView</p>
   
    </div>

    
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

export default Home;
