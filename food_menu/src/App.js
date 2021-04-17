import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {

  const [menu, setMenu] = useState("All");
  const [menuItems, setMenuItems] = useState(data);

  let items = data;
  let cat = items.map(item=>{
    return item.category
  })
  let categories = cat.filter((item, index) => {
    return cat.indexOf(item) === index;
  });

  console.log("Cat: ", categories)
  return <>
    <main>
      <section className="menu section">

      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories categories={categories} />

      <Menu menu={data} />

      </section>

    </main>
  
  </>;
}

export default App;
