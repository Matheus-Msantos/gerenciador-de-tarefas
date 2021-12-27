import React from "react";
import { render, fireEvent } from '@testing-library/react';
import CadastrarTarefa from "./Cadastrar-tarefa";

describe('Teste de cadastro de tarefas', () => {

    test('Deve rendenrizar sem erros', () => {
        render(<CadastrarTarefa />);
    });
});