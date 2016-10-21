import React from 'react'
import Styles from './Spinner.scss'

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let spinnerClass = Styles['spinner'] + " " + Styles['l-center'];
    let size = this.props.size;
    let margin = -1*(size/2);
    return (<div
      className={(this.props.state==="hide"?"hide ":" ") + spinnerClass}
      style={{
        'width': size+'px',
        'height': size+'px',
        'marginTop': margin,
        'marginLeft': margin,
        'borderWidth': 2*size/15
      }}
    ></div>)
  }
}
