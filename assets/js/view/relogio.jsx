define ([
  "react",
  "reactDOM",
  "jsx!view/relogio/RelogioView"
], (React, ReactDOM, RelogioView) => {

  var div_page = document.getElementsByClassName('page')[0];

  function Relogio() {
    return (
      <div className="container">
        <RelogioView />
      </div>
    );
  }

  ReactDOM.render(<Relogio />, div_page);
});