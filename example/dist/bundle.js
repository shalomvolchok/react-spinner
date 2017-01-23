require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"reactjs-spinner":[function(require,module,exports){
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

},{"react":undefined}]},{},[]);
