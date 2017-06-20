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
    return pessoa.nome + ' ' + pessoa.sobrenome;
  }

  render() {
    if (this.props.pessoa) {
      return <h1>Olá, {this.exibeNomePessoa(this.props.pessoa)}!</h1>;
    }
    return <h1>Olá, estranho.</h1>;
  }
}