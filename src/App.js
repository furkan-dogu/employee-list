import React from "react";
import List from "./components/List";
import data from "./helper/data";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState(data.slice(0, 5));

  const nextList = () => {
    if (index < data.length - 5) {
      setIndex(index + 5);
      setList(data.slice(index + 5, index + 10));
    }
  };

  const prevList = () => {
    if (index > 0) {
      setIndex(index - 5);
      setList(data.slice(index - 5, index));
    }
  };

  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Employees {index + 1} to {index + 5})
        </h5>
        <List data={list} />
        <div className="btns">
          <button onClick={prevList}>Prev</button>
          <button onClick={nextList}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
