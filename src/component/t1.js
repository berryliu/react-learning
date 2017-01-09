/**
 * Created by berry on 17/1/9.
 *
 * CommentBox
 *   CommentList
 *     Comment
 *   CommentForm
 */

import base from '../style/base.less'
import React from 'react'
import ReactDom from 'react-dom'
import Remarkable from 'remarkable'

let CommentList = React.createClass({
  render(){
    console.log(this.props.data)
    let comments = this.props.data.map(v => {
      return (
        <Comment author={v.author} key={v.id}>{v.text}</Comment>
      )
    })
    return (
      <div className="commentList">
        {comments}
      </div>
    )
  }
})

let Comment = React.createClass({
  /**
   * @desc 转换 md，输出原始 html
   * @param md
   */
  getRawMD(md){
    let R = new Remarkable();
    return {
      __html: R.render(md.toString())
    }
  },

  render(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <p dangerouslySetInnerHTML={this.getRawMD(this.props.children)}></p>
      </div>
    )
  }
})

let CommentForm = React.createClass({
  render(){
    return (
      <div className="commentForm">
        I'm a CommentForm
      </div>
    )
  }
})

let CommentBox = React.createClass({
  getInitialState(){
    return { data: [] }
  },
  componentDidMount(){
    let data = [
      { id: 1, author: "Pete Hunt", text: "This is one comment" },
      { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
    ]

    setTimeout(() => {
      this.setState({
        data
      })
    }, 2 * 1000)
  },

  render(){
    return (
      <div className="commentBox">
        <h1>I'm a CommentBox</h1>
        <CommentList data={this.state.data}></CommentList>
        <CommentForm></CommentForm>
      </div>
    )
  }
})

ReactDom.render(
  <CommentBox/>,
  document.getElementById('content')
)
