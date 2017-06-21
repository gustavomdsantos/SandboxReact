class Index extends React.Component {

  rootNode = document.getElementsByClassName('mini-app')[0];

  constructor(props) {
    super(props);

    this.state = {isSubMenu: false}; // seta estado inicial de tela

    // Este binding é necessário para que o `this.` funcione no retorno de chamada
    this.onClick$Relogio = this.onClick$Relogio.bind(this);
    this.onClick$BemVindo = this.onClick$BemVindo.bind(this);
    this.onClick$Aviso = this.onClick$Aviso.bind(this);
  }

  onClick$Relogio() {

    this.setState({isSubMenu: true});
    ReactDOM.render(<Relogio />, this.rootNode);
  }

  onClick$BemVindo() {

    this.setState({isSubMenu: true});
    ReactDOM.render(<BemVindo />, this.rootNode);
  }

  onClick$Aviso() {

    this.setState({isSubMenu: true});
    ReactDOM.render(<Aviso />, this.rootNode);
  }

  render() {

    return (
      <div className="container">
        <div className="mini-app">
          <IndexView />
        </div>
        <VoltarView ativa={this.state.isSubMenu}/>
      </div>
    );
  }
}

// Starta a aplicação
ReactDOM.render(<Index />, document.getElementsByClassName('page')[0]);