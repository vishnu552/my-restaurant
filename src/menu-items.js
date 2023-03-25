import React from "react";

function Menu1({items}){
    return(
        <div className="section-center">
         {items.map(menuItem=>{
            const {id,title,price,desc,img} = menuItem;
            return(
                <article key={id} className="menu-item">
                    <img src={img} alt={title} className="photo" />
                    <div className="item-info">
                        <header>
                            <h4>{title}</h4>
                            <p className="price">{price} Rs</p>
                            </header>
                    <p className="item-text">{desc}</p>
                       
                    </div>
                </article>
            )
         })}   

        </div>
    )
}
export default Menu1;