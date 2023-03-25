import React from 'react'
import Menu1 from './menu-items';
import './menu.css';
import { useState } from 'react';
import menu from './data';

function Menu() {
  const [menuItems,setMenuItems] = useState(menu);
  return(
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>Food Menu</h2>
          <div class="underline"></div>
        </div>
        <Menu1 items={menuItems} />
      </section>
    </main>
  )
}


export default Menu