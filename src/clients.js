import React from 'react';
import { Link } from 'react-router-dom';
import { comments } from './comments';

function Clients() {
  return (
    <div className='container' id="client-background">
      <div className='top-element'>
      <p className='golden-p'>Our</p>
    <h2 className='h2-head'>Clients</h2>
      </div>
    <div className='data-container'>
    {comments.map(data=>{
        return(
<div className='data-div client-comment'>
<img src={data.img} alt={data.client} className="comment-img"/>
<p>{data.comment}</p>
<h5 className='client-name'>{data.client}</h5>
</div>
        )
    })
}
</div>
<div className='read-btn'>
<Link to='contact'><button className='btn'>contact us</button></Link>
</div>
</div>
  )
}

export default Clients