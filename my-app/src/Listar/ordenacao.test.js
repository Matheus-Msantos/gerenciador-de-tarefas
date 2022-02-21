import React from "react";
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Ordenacao from "./ordenacao";
import '@testing-library/jest-dom/extend-expect';

describe('Teste do componente de ordenação', () => {
  it('Deve renderizar o componente', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Ordenacao
        ordenarAsc={false}
        ordenarDesc={false} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Ordenação padrão', () => {

  });
}); 