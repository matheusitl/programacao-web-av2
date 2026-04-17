import React from 'react';

const Projetos = () => {
  // Array de objetos (Exigência da tarefa)
  const listaProjetos = [
    { id: 1, nome: "Debian Environment", desc: "Configuração de Dotfiles para desenvolvimento Linux." },
    { id: 2, nome: "React Architecture", desc: "Migração de portfólio para Single Page Application." },
    { id: 3, nome: "Hardware Dashboard", desc: "Monitor de performance para setups Ryzen/RTX." }
  ];

  return (
    <section style={{ padding: '60px 10%', fontFamily: 'Courier New' }}>
      <h2 style={{ color: '#fafafa', borderLeft: '5px solid #8c0707', paddingLeft: '15px', marginBottom: '40px' }}>
        _MEUS_PROJETOS
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {listaProjetos.map((proj) => (
          <div key={proj.id} style={{
            background: '#0a0a0a',
            padding: '25px',
            border: '1px solid #222',
            borderRadius: '4px'
          }}>
            <h3 style={{ color: '#8c0707', marginBottom: '10px' }}>{proj.nome}</h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;