import React from 'react';

function CadastrarTarefa() {

    return (
        <div className="g-cadastrar-container">
            <h3>Cadastrar</h3>

            <section className="g-cadastrar-section">
                <form>
                    <label>Tarefa</label>
                    <input
                        type="text"
                        name="newTarefa"
                        minLength="5"
                        maxLength="100"
                        required
                    />

                    <div className="g-cadastrar-grupo-btn">
                        <a className="g-btn-back" href="/">Voltar</a>
                        <button className="g-btn-submit" type="submit">cadastrar</button>
                    </div>
                </form>
            </section>

            <div className="g-cadastrar-modal-overley"></div>
            <div className="g-cadastrar-modal-container">
                <div className="g-cadastrar-modal-header">
                    <p>Sucesso</p>
                </div>
                <div className="g-cadastrar-modal-body">
                    <p>Tarefa adicionada com sucesso!</p>
                </div>
                <div className="g-cadastrar-modal-footer">
                    <a href="/" className="g-btn-back">Voltar</a>
                    <button className="g-cadastrar-modal-btn--new">Criar nova tarefa</button>
                </div>
            </div>
        </div>
    );

}
export default CadastrarTarefa