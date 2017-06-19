var div_page = document.getElementsByClassName('page')[0];

const gustavo = {
  nome: 'Gustavo',
  sobrenome: 'Moraes'
};

function exibeNomePessoa(pessoa) {
  return pessoa.nome + ' ' + pessoa.sobrenome;
}

function cumprimentar(pessoa) {
	if (pessoa) {
		return (
			<div className="container">
				<h1>Olá, {exibeNomePessoa(pessoa)}!</h1>
			</div>
		);
	}
	return (
		<div className="container">
			<h1>Olá, estranho.</h1>
		</div>
	);
}

ReactDOM.render(cumprimentar(gustavo), div_page);