var React = require('react');

var ReactSpinner = React.createClass({
	propTypes: {
		size: React.PropTypes.number,
		borderColor: React.PropTypes.string,
		borderTopColor: React.PropTypes.string,
		state: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			size: 20,
			borderColor: '#f3f3f3',
			borderTopColor: '#3498db'
		};
	},
	render: function() {
		let spinnerClass = 'mg-react-spinner__main' + ' ' + 'l-center';
    let size = this.props.size;

    let margin = -1*(size/2);
		let borderWidth = 2*size/15;
		let minHeight = (borderWidth + size)*1.41;
		let borderColor = this.props.borderColor;
		let borderTopColor = this.props.borderTopColor;
    return (
    <div
      className={(this.props.state==='hide'?'hide ':' ') + 'mg-react-spinner'}
      style={{
        'minHeight': minHeight+'px'
      }}>
      <div
        className={spinnerClass}
        style={{
          'width': size+'px',
          'height': size+'px',
          'marginTop': margin,
          'marginLeft': margin,
          'borderWidth': borderWidth,
	  'borderColor' : borderColor,
	  'borderTopColor' : borderTopColor
        }}
      ></div>
    </div>);
	}
});

export default ReactSpinner;
