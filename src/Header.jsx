import React from 'react';

const Header = () => (
  <header style={{ 
    padding: '20px 10%', 
    borderBottom: '2px solid #8c0707', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#000'
  }}>
    <div style={{ color: '#fafafa', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Courier New' }}>
      MATHEUS<span style={{color: '#8c0707'}}>.</span>JSX
    </div>
    <nav>
      <a href="#" style={{ color: '#fafafa', textDecoration: 'none', marginLeft: '20px', fontWeight: 'bold', fontFamily: 'Courier New' }}>Sobre</a>
      <a href="#" style={{ color: '#fafafa', textDecoration: 'none', marginLeft: '20px', fontWeight: 'bold', fontFamily: 'Courier New' }}>Projetos</a>
    </nav>
  </header>
);

export default Header;
