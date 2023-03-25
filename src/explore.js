import React from 'react'
import { Link } from 'react-router-dom'
import {menuData} from './menuFeature'

function Explore() {
  return (
    <div className='container'>
        <p className='golden-p'>Explore</p>
        <h2 className='h2-head'>menu features</h2>
        <div className='data-container'>
        {menuData.map(menu=>{
            return(
    <div className='data-div'>
    <img src={menu.img} alt={menu.feature} />
    <h5>{menu.feature}</h5>
    <p>{menu.details}</p>
    </div>
            )
        })
}
</div>
<Link to='menu'><button className='btn'>see menu</button></Link>
    </div>     
  )
}

export default Explore