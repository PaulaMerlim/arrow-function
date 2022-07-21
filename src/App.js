//Crie um component de class

// Crie uma arrow function que receba uma mensagem e exiba na tela

// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React from "react";
export default class App extends React.Component {
  state = {
    turma: "alunos",
    quantidade: 6
  };
  sala = () => {
    return (
      <h1>
        {" "}
        Na sala de aula, tem {this.state.quantidade} {this.state.turma}.
      </h1>
    );
  };
  dobro = () => {
    return (
      <h2>
        Entraram na classe o dobro de alunos. Assim ficaram{" "}
        {this.state.quantidade * 2} {this.state.turma}.
      </h2>
    );
  };

  render() {
    return (
      <div>
        <h1>{this.sala()}</h1>
        <h2> {this.dobro()} </h2>
      </div>
    );
  }
}
