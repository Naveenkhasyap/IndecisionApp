console.log('app.js is running');


//jsx- javascript xml
var appRoot = document.getElementById('app');
var temp = (
    <div>
        <i><h1>Indecision App!</h1>
        <p>this is a paragrah</p>
        <ol>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
        </ol></i>
    </div>
);  


var templateTwo = (
    <div>
        <i>
        <h1> Naveen Kumar M</h1>
        <p> Age: 26 </p>
        <p> Location: Bangalore </p>
        </i>
    </div>

);

ReactDOM.render( templateTwo, appRoot);