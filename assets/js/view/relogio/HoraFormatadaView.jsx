class HoraFormatadaView extends React.Component {

  render() {
    return <span>{this.props.horario.toLocaleTimeString()}</span>;
  }
}