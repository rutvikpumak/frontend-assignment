import React from "react";
import "../styles/Table.css";

const Table = ({ columns, data }) => {
  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
