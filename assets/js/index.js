'use strict';

var div_container = document.getElementsByClassName('container')[0];
var helloReactElement = React.createElement('h1', null, 'Olá mundo em React!');

ReactDOM.render(helloReactElement, div_container);