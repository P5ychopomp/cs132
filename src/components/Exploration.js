import React, { useEffect, useState } from "react";

export const Exploration = () => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const notebookUrl = "DataModelling.ipynb";
    fetch(notebookUrl)
      .then((response) => response.json())
      .then((data) => {
        setCells(data.cells);
      });
  }, []);

  return (
    <div>
      {cells.map((cell, index) => (
        <div key={index}>
          <div>{cell.source}</div>
          <div>{cell.output}</div>
        </div>
      ))}
    </div>
  );
};
