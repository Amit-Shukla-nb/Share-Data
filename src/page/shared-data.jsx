import React, { Component } from 'react'
import TableLeft from '../components/table-left/table-left.component'
import TableRight from '../components/table-right/table-right.component'
import './shared-data.styles.css'

class SharedData extends Component {
  render() {
    return (
      <div className="tabile">
        <TableLeft />
        <TableRight /> 
      </div>
    )
  }
}

export default SharedData;
