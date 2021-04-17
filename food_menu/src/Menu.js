import React from 'react';

const Menu = ({menu}) => {
  console.log(menu);

  return (
    <div className="section-center">
      {
        menu.map(item=> {
          return (<article className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <div className="item-text">
                <p>{item.desc}</p>
              </div>
            </div>
          </article>)
        })
      }

    </div>
  );
};

export default Menu;
