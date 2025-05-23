import React from 'react';
import EditEmployee from './EditEmployee.jsx';

function Employee(props) {
  return (
    <div className="max-w-md mx-auto rounded-2xl shadow-lg bg-white p-6 sm:flex sm:items-center sm:gap-6">
      <img
        className="mx-auto block h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
       
      />
      <div className="mt-4 space-y-2 text-center sm:mt-0 sm:text-left">
        <div>
          <p className="text-lg font-semibold text-gray-900">{props.name}</p>
          <p className="text-sm text-gray-500">{props.designation}</p>
        </div>
        <EditEmployee />
       
      </div>
    </div>
  );
}

export default Employee;
