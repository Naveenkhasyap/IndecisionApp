'use strict';

console.log('app.js is running');

//jsx- javascript xml
var appRoot = document.getElementById('app');
var temp = React.createElement(
    'div',
    null,
    React.createElement(
        'i',
        null,
        React.createElement(
            'h1',
            null,
            'Indecision App!'
        ),
        React.createElement(
            'p',
            null,
            'this is a paragrah'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'one'
            ),
            React.createElement(
                'li',
                null,
                'two'
            ),
            React.createElement(
                'li',
                null,
                'three'
            ),
            React.createElement(
                'li',
                null,
                'four'
            )
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'i',
        null,
        React.createElement(
            'h1',
            null,
            ' Naveen Kumar M'
        ),
        React.createElement(
            'p',
            null,
            ' Age: 26 '
        ),
        React.createElement(
            'p',
            null,
            ' Location: Bangalore '
        )
    )
);

ReactDOM.render(templateTwo, appRoot);
