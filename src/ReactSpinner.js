var React = require('react');

var ReactSpinner = React.createClass({
	propTypes: {
		size: React.PropTypes.number,
		state: React.PropTypes.string
	},
	getDefaultProps: function() {
		return {
			size: 20
		};
	},
	render: function() {
		let spinnerClass = 'mg-react-spinner__main' + ' ' + 'l-center';
    let size = this.props.size;

    let margin = -1*(size/2);
		let borderWidth = 2*size/15;
		let minHeight = (borderWidth + size)*1.41;
		let borderColor = this.props.borderColor || '#f3f3f3';
		let borderTopColor = this.props.borderTopColor || '#3498db';
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
					'border-color' : borderColor,
					'border-top-color' : borderTopColor
        }}
      ></div>
    </div>);
	}
});

export default ReactSpinner;
