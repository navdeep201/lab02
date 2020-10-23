import React from 'react';
import Header from '../shared/Header'
 

const Home = () => {
    return (
    <>
    <Header title="HOME"/>
    
   <ul>
   <form action="/about" method="get" target="_blank">
         <button type="submit">About me</button>
      </form>
     
     </ul>
     
    </> 
  );
  
}
 
export default Home;