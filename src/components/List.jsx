import React from "react";

const List = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <article className="person" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>{item.email}</p>
            <p>{item.age} years</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
