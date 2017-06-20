var div_page = document.getElementsByClassName('page')[0];

const SandboxReact = () => (
  <ReactRouter>
    <div>
      <ReactRouter.Route exact path="/" component={Index} />
      <ReactRouter.Route path="/relogio" component={Relogio} />
      <ReactRouter.Route path="/bemvindo" component={BemVindo} />
    </div>
  </ReactRouter>
);

window.SandboxReact = SandboxReact;

ReactDOM.render(<SandboxReact />, div_page);
