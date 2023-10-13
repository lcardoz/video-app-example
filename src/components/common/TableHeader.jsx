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

  const renderSortIcon = column => {
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"/>
    return <i className="fa fa-sort-desc"/>
  }

  return (
    <>
      <thead>
        <tr>
          {columns.map(column => 
            <th 
              className="clickable"
              key={column.path || column.key} 
              onClick={() => raiseSort(column.path)}
            >
              {column.label} {renderSortIcon(column)}
            </th>
          )}
        </tr>
      </thead>
    </>
  )
}

export default TableHeader;