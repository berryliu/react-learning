/**
 * Created by berry on 17/1/10.
 */
import React from 'react'
import {Link} from 'react-router'

const App = React.createClass({
  render(){
    return (
      <div>
        <h1>APP</h1>
        <ul>
          <li><Link to="/comment">Comment</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

export default App
