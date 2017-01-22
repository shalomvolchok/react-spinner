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
          'borderWidth': borderWidth
        }}
      ></div>
    </div>);
	}
});

export default ReactSpinner;
