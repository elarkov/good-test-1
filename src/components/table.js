import React from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';


const Table = ({ cols, data }) => {

  const elementsTh = cols.map((item) => {
    const { key } = item;

    return (
      <TableHeader key={key} { ...item } />
    );
  });

  const elementsTd = data.map((el) => {
    const { id } = el;
    return (
      <TableBody key={id} {...el} />
    );
  });

  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          {elementsTh}
        </tr>
      </thead>
      <tbody>
        {elementsTd}
      </tbody>
    </table>
  )
};

export default Table;