class TextoAvisoView extends React.Component {

  render() {
    // TextoAvisoView é renderizado dependendo do valor da `props.avisa`.
    if (this.props.avisa) {
      return (
        <div className="aviso">
          <h2><i>Cuidado!</i></h2>
        </div>
      );
    }
    else {
      // Faz o componente esconder sozinho mesmo tendo se renderizado por outro
      // componente. Isto previne dele se renderizar quando não é devido.
      return null;
    }
  }
}