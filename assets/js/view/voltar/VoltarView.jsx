class VoltarView extends React.Component {

  // Estas variáveis JSX será convertida para CSS dentro de `render()`
  div_style = {
    textAlign: "center"
  };

  a_style = {
    cursor: "pointer"
  };

  onClick$renderIndex() {
    ReactDOM.render(<Index />, document.getElementsByClassName('page')[0]);
  }

  render() {
    return (
      <div className="voltarView" style={this.div_style}>
        <a style={this.a_style} onClick={this.onClick$renderIndex}>
          Voltar ao menu principal
        </a>
      </div>
    );
  }
}