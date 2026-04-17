import React from 'react';
import Header from './Header';
import Projetos from './Projetos';

function App() {
  return (
    <div style={{ backgroundColor: '#000000', color: '#fafafa', minHeight: '100vh' }}>
      <Header /> {/* Uso do Componente 1 */}
      
      <main style={{ textAlign: 'center', padding: '80px 10%', fontFamily: 'Courier New' }}>
        <h1 style={{ fontSize: '3.5rem', margin: 0 }}>MATHEUS</h1>
        <p style={{ color: '#8c0707', fontWeight: 'bold', marginTop: '10px' }}>
          Sistemas para Internet | Migração React
        </p>
      </main>

      <Projetos /> {/* Uso do Componente 2 */}

      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #1a1a1a', color: '#444', fontSize: '0.8rem', fontFamily: 'Courier New' }}>
        <p>&copy; 2026 Matheus // Publicado via <span style={{color: '#8c0707'}}>Vercel</span></p>
      </footer>
    </div>
  );
}

export default App;
