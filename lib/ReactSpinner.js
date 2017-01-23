'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var React = require('react');

var ReactSpinner = React.createClass({
  displayName: 'ReactSpinner',

  propTypes: {
    size: React.PropTypes.number,
    state: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      size: 20
    };
  },
  render: function render() {
    var spinnerClass = 'mg-react-spinner__main' + ' ' + 'l-center';
    var size = this.props.size;
    var margin = -1 * (size / 2);
    var borderWidth = 2 * size / 15;
    var minHeight = (borderWidth + size) * 1.41;
    return React.createElement(
      'div',
      {
        className: (this.props.state === 'hide' ? 'hide ' : ' ') + 'mg-react-spinner',
        style: {
          'minHeight': minHeight + 'px'
        } },
      React.createElement('div', {
        className: spinnerClass,
        style: {
          'width': size + 'px',
          'height': size + 'px',
          'marginTop': margin,
          'marginLeft': margin,
          'borderWidth': borderWidth
        }
      })
    );
  }
});

exports['default'] = ReactSpinner;
module.exports = exports['default'];