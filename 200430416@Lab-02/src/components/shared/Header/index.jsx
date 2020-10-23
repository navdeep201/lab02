  
import React from 'react';
import Styles from './styles';

const Header = (lab) => {
  return (
    <Styles.Header>
      <h1>{lab.title}</h1>
    </Styles.Header>
  );
}
 
export default Header;