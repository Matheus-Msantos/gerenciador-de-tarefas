import React, { useState, useEffect } from 'react';
import ItensListarTarefas from './itens-listar-tarefas';
import Paginacao from './paginacao';

function ListarTarefas() {

  const ITENS_POR_PAG = 3

  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [paginaAtual, setPaginaAtual] = useState(1);

  useEffect(() => {

    const obterTarefas = () => {
      const tarefasDb = localStorage['tarefas'];
      let listaTarefas = tarefasDb ? JSON.parse(tarefasDb) : [];
      setTotalItems(listaTarefas.length);
      setTarefas(listaTarefas.splice((paginaAtual - 1) * ITENS_POR_PAG, ITENS_POR_PAG));
    }

    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false)
    }

  }, [carregarTarefas, paginaAtual]);

  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina);
    setCarregarTarefas(true);
  }

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

      <Paginacao
        totalItems={totalItems}
        itemsPorPagina={ITENS_POR_PAG}
        paginaAtual={paginaAtual}
        mudarPagina={mudarPagina} />

    </div>
  );
}

export default ListarTarefas