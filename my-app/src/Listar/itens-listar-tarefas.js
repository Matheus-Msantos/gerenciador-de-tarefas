import React, { useState } from "react";
import propTypes from 'prop-types';


function ItensListarTarefas(props) {

  const [marcada, setMarcada] = useState(false);

  const marcarConcluida = (tarefa) => {
    setMarcada(true)
  }

  return (
    props.tarefas.map(tarefa =>
      <div className="g-listar-tarefas-box" key={tarefa.id} data-testid="tarefa">

        <p className={tarefa.concluida ? "g-listar-tarefas-marcada" : ''} data-testid="tarefa-nome">{tarefa.nome}</p>

        <div className={tarefa.concluida ? 'g-listar-tarefas-btn--edit_none' : 'g-listar-tarefas-btn--edit'}>
          <a href={"/atualizar/" + tarefa.id}>Editar</a>
        </div>
      </div>
    )
  );
}

ItensListarTarefas.propTypes = {
  tarefas: propTypes.array.isRequired,
  recarregarTarefas: propTypes.func.isRequired
}

export default ItensListarTarefas

