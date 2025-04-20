import { diasAgenda } from './agendaCompleta';

function App() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <h1>🌴 Roteiro Flórida 2025 – Família Bulcão & Fernandes</h1>
      {diasAgenda.map((dia, i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <h2>{dia.titulo}</h2>
          {dia.componente}
        </div>
      ))}
    </div>
  );
}

export default App;
 