import React from 'react';

const TableBody = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.age}</td>
    </tr>
  );
};

export default TableBody;