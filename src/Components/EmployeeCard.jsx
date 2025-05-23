import React from 'react';
 // Add some styles for the card

function EmployeeCard({ name, role, email, phone }) {
  return (
    <div className="employee-card">
      <h3>{name}</h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}

export default EmployeeCard;
