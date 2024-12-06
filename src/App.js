import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        );
        const result = await response.json();
        setData(result || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = ["S.No.", "Percentage Funded", "Amount Pledged"];

  const formattedData = data.map((item, index) => ({
    "S.No.": index + 1,
    "Percentage Funded": item["percentage.funded"],
    "Amount Pledged": item["amt.pledged"],
  }));

  return (
    <div className="app">
      <Table columns={columns} data={formattedData} />
    </div>
  );
};

export default App;
