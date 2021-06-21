import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  
  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";

  }

  /*this no js é dinâmico e neste caso é um evento externo(método: onChange) que puxa o titulo 
  então manipulamos com o bind*/
  _handleMudancaTitulo(evento){
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    this.texto = evento.target.value;
  }


  _criarNota(evento){
    evento.preventDefault(); //não recarregar a pagina
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro"  onSubmit={this._criarNota.bind(this)}>
        <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
        <textarea rows={15} placeholder="Escreva sua nota..." className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}/>
        <button className="form-cadastro_input form-cadastro_submit">Criar Nota </button>
      </form>
    );
  }
}

export default FormularioCadastro;