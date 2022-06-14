import React from 'react'
import { useState } from 'react';

const App = () => {
  const [ativo, setAtivo] = useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

export default App;
