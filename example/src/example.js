var React = require('react');
var ReactDOM = require('react-dom');
var ReactSpinner = require('reactjs-spinner');

var App = React.createClass({
	render () {
		return (
			<div>
				With default size of 20 units.
				<ReactSpinner />
				With given size of 40 units.
				<ReactSpinner size={40} />
				With given colors
				<ReactSpinner size={40} borderColor='#f2f0f0' borderTopColor='#e60000'/>
				Done.
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
