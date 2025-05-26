// src/Components/Filter.jsx
import React, { useState } from 'react';

function Filter({ isOpen, onClose, onApply }) {
  const [selectedRole, setSelectedRole] = useState('');

  const handleApply = () => {
    onApply(selectedRole);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Filter Employees</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Role</label>
        <select
          className="w-full border rounded p-2"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="">All</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
          <option value="HR">HR</option>
          <option value="CEO">CEO</option>
        </select>

        <div className="flex justify-end mt-6 space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleApply} className="bg-blue-600 text-white px-4 py-2 rounded">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
