import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AtualizarTarefa from './Atualizar-tarefa.js';

describe('Teste de autalização de tarefas', () => {

    test('Redenrizar sem erro', () => {
        render(<AtualizarTarefa id={1} />);
    });
});