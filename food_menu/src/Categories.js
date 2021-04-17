import React from 'react';

const Categories = ({categories}) => {
  console.log(categories)
  return (
    <div className="btn-container">
      <button className="filter-btn">All</button>
      {
              categories.map((item, index) => {
          return <button key={index} className="filter-btn">{item}</button>
        })
      }
      
    </div>
  );
};

export default Categories;
