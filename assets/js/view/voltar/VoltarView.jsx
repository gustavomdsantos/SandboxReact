class VoltarView extends React.Component {

  onClick$renderIndex() {
    ReactDOM.render(<Index />, document.getElementsByClassName('page')[0]);
  }

  render() {
    return (
      <a onClick={this.onClick$renderIndex}>
        Voltar ao menu principal
      </a>
    );
  }
}