import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();
    
    //Propriedade especial. Toda vez que é atualizada, o react chama o método render;
    this.state = {
      notas:[]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        {/*Da pra passar propriedades pros filhos como em criarNota( em formulario) que passa referência pro elemento pai
        entao qdo eu chamo o criarNota é possivel mudar dinamicante os dados (injeção de dependecia)*/}
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/> 
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;
