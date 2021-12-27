import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListarTarefas from './Listar/Listar-tarefas.js'
import CadastrarTarefa from './Cadastrar/Cadastrar-tarefa.js'
import AtualizarTarefa from './Atualizar/Atualizar-tarefa.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListarTarefas />} />
      <Route path="/cadastrar" element={<CadastrarTarefa />} />
      <Route path="/atualizar/:id" element={<AtualizarTarefa />} />
    </Routes>
  );
}

export default App;
