import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AtualizarTarefa from './Atualizar-tarefa.js';
import Tarefas from '../Models/Tarefa.model';

describe('Teste de autalização de tarefas', () => {
  const nomeTarefa = 'Tarefa';

  beforeEach(() => {
    localStorage['tarefas'] = JSON.stringify([
      new Tarefas(1, nomeTarefa, false),
    ])
  })

  test('Redenrizar sem erro', () => {
    render(<AtualizarTarefa id={1} />);
  });
});