import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Fib() {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const fetchValues = async () => {
    const response = await axios.get("/api/values/current");
    setValues(response.data || {});
  };

  const fetchIndexes = async () => {
    const response = await axios.get("/api/values/all");
    setSeenIndexes(response.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/values", {
      index,
    });

    setIndex("");

    await fetchIndexes();
    await fetchValues();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>

        <input
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />

        <button>Submit</button>
      </form>

      <h3>Indexes I have seen:</h3>

      {seenIndexes.map(({ number }) => number).join(", ")}

      <h3>Calculated Values:</h3>

      {Object.keys(values).map((key) => (
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      ))}
    </div>
  );
}
