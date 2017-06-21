class BemVindoView extends React.Component {

  /** Esqueleto de objeto que deve ser passado como parâmetro. */
  props = {
    pessoa: {
      nome: "",
      sobrenome: ""
    }
  }

  constructor(props) {
    super(props);

    this.props = props;
  }

  exibeNomePessoa(pessoa) {
    var texto = "";
    pessoa.sobrenome ? (
      texto = pessoa.nome + ' ' + pessoa.sobrenome
    ) : (
      texto = pessoa.nome
    )
    return texto;
  }

  render() {
    if (this.props.pessoa.nome) {
      return <h1>Olá, {this.exibeNomePessoa(this.props.pessoa)}!</h1>;
    }
    return <h1>Olá, estranho.</h1>;
  }
}