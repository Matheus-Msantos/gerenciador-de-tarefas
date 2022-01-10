import React, { useState, useEffect } from 'react';
import ItensListarTarefas from './itens-listar-tarefas';

function ListarTarefas() {

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);

  useEffect(() => {

    const obterTarefas = () => {
      const tarefasDb = localStorage['tarefas'];
      let listarTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTarefas(listarTarefas)
      console.log(listarTarefas);
    }

    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false)
    }

  }, [carregarTarefas]);

  return (
    <div className="g-listar-container">
      <h1>Lista de Tarefas</h1>

      <div className="g-listar-table">
        <div className="g-listar-table-head">
          <p>Tarefas</p>
          <a href="/cadastrar">Nova tarefa</a>
        </div>

        <div className="g-listar-body">
          <ItensListarTarefas
            tarefas={tarefas}
            recarregarTarefas={setCarregarTarefas} />
        </div>
      </div>

    </div>
  );
}

export default ListarTarefas