import React from 'react';
import ReactDom from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import ListarTarefas from './Listar-tarefas';

describe('Teste de listagem de tarefas', () => {

    test('Deve rendenrizar sem erros', () => {
        render(<ListarTarefas />);
    });
})