var React = require('react');
var ReactDOM = require('react-dom');
var ReactSpinner = require('react-spinner');

var App = React.createClass({
	render () {
		return (
			<div>
				With default size of 20 units.
				<ReactSpinner />
				With given size of 40 units.
				<ReactSpinner size={40} />
				Done.
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
