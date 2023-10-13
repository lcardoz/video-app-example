import React from 'react';

const TableHeader = ({ columns, sortColumn, onSort }) => {

  // columns: array
  // sortColumn: object
  // onSort: function

  const raiseSort = path => {
    const sortColumnCopy = {...sortColumn}
    if (sortColumnCopy.path === path)
      sortColumnCopy.order = sortColumnCopy.order === "asc" ? "desc" : "asc";
    else {
      sortColumnCopy.path = path;
      sortColumnCopy.order = "asc";
    }
    onSort(sortColumnCopy);
  }

  return (
    <>
      <thead>
        <tr>
          {columns.map(column => 
            <th key={column.path || column.key} onClick={() => raiseSort(column.path)}>{column.label}</th>
          )}
        </tr>
      </thead>
    </>
  )
}

export default TableHeader;