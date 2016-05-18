var React    = require('react');
var ReactDOM = require('react-dom');

/*
  App
*/

var App = React.createClass({
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/*
  Header
*/

var Header = React.createClass({
  render: function() {
    return (
      <h1>Header</h1>
    )
  }
});

/*
  Order
*/

var Order = React.createClass({
  render: function() {
    return (
      <h1>Order</h1>
    )
  }
});

/*
  Inventory
*/

var Inventory = React.createClass({
  render: function() {
    return (
      <h1>Inventory</h1>
    )
  }
});

/*
  StorePicker
  This will let us make <StorePicker />
*/

var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" ref="storeId" required/>
        <input type="submit" />
      </form>
    )
  }

});

ReactDOM.render(<App/>, document.querySelector('#main'));
