var React = require('react');

var ReactSpinner = React.createClass({
	getDefaultProps: function() {
    return {
      size: 20
    };
  },
	render: function() {
		let spinnerClass = 'mg-react-spinner__main' + " " + 'l-center';
    let size = this.props.size;
    let margin = -1*(size/2);
    return (
    <div
      className={(this.props.state==="hide"?"hide ":" ") + 'mg-react-spinner'}
      style={{
        'minHeight': size+'px'
      }}>
      <div
        className={spinnerClass}
        style={{
          'width': size+'px',
          'height': size+'px',
          'marginTop': margin,
          'marginLeft': margin,
          'borderWidth': 2*size/15
        }}
      ></div>
    </div>)
	}
});

export default ReactSpinner;
