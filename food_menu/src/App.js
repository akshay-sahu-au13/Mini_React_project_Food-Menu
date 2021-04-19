import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

function App() {

  // const [menu, setMenu] = useState("All");
  const [menuItems, setMenuItems] = useState(data);

  const filterMenu = (e)=> {
    // console.log(e.target.textContent)
    const new_menu = e.target.textContent
    // setMenu(e.target.textContent);
    if (new_menu === "All"){
      setMenuItems(data);
      return 
    }
    const   new_data = data.filter(item => {
      // console.log("Menu:", new_menu)
      return item.category === new_menu;
    })
    setMenuItems(new_data)
  }



  let items = data;
  let cat = items.map((item)=> {
    return item.category
  })
  let categories = cat.filter((item, index) => {
    return cat.indexOf(item) === index;
  });

  // console.log("Cat: ", categories)
  return <>
    <main>
      <section className="menu section">

      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>

      <Categories categories={categories} filter={filterMenu} />

      <Menu menu={menuItems} />

      </section>

    </main>
  
  </>;
}

export default App;
