/**
 * Componente *funcional* React.
 * Renderiza uma mensagem de boas vindas para o nome passado como parâmetro.
 */
function BemVindo(props) {

  const gustavo = {
      nome: 'Gustavo',
      sobrenome: 'Moraes'
  };

  return (
    <div className="container">
      <BemVindoView pessoa={gustavo} />
    </div>
  );
}