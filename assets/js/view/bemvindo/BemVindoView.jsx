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
    var _pessoa = this.props.pessoa;

    return <h1>Olá, {_pessoa.nome ? this.exibeNomePessoa(_pessoa) : "estranho"}!</h1>;
  }
}