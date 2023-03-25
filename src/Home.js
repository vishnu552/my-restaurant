import React from 'react'
import Clients from './clients';
import Explore from './explore';
import Header from './header';
import Shots from './Shots';
import WhyUs from './why-us';

function Home() {
  return (
    <div>
   <Header />
   <WhyUs />
   <Explore />
   <Clients />
   <Shots />
    </div>
  )
}

export default Home