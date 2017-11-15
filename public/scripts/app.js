'use strict';

console.log('app.js is running');

//jsx- javascript xml
var appRoot = document.getElementById('app');
var temp = React.createElement(
  'h1',
  null,
  'Indecision App!'
);

ReactDOM.render(temp, appRoot);
