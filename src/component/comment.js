/**
 * Created by berry on 17/1/9.
 *
 * Comment
 *   CommentList
 *     CommentItem
 *   CommentForm
 */

import base from '../style/base.less'
import React from 'react'
import Remarkable from 'remarkable'
import {ADD_DATA} from '../store/action'
import {connect}from 'react-redux'

let CommentList = React.createClass({
  render(){
    console.log(this.props.data)
    let comments = this.props.data.map(v => {
      return (
        <CommentItem author={v.author} key={v.id}>{v.text}</CommentItem>
      )
    })
    return (
      <div className="commentList">
        {comments}
      </div>
    )
  }
})

let CommentItem = React.createClass({
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
  getInitialState(){
    return {
      author: '',
      text: ''
    }
  },
  handleAuthor(e){
    this.setState({
      author: e.target.value
    });

  },
  handleText(e){
    this.setState({
      text: e.target.value
    });
  },
  handleSubmit(e){
    e.preventDefault()
    let author = this.state.author.trim();
    let text = this.state.text.trim();

    if (!author || !text) {
      return
    }
    this.props.onCommentSubmit({
      author,
      text
    })
    this.setState({
      author: '',
      text: ''
    })
  },

  render(){
    // value 还是需要回传，每次都要更新？？？
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthor}/>
        <input type="text" placeholder="Say something" value={this.state.text} onChange={this.handleText}/>
        <input type="submit" value="Submit"/>
        <p>{this.state.author}: {this.state.text}</p>
      </form>
    )
  }
})

let Comment = React.createClass({
  componentDidMount(){
    let data = { id: 1, author: "Pete Hunt", text: "This is one comment" }

    setTimeout(() => {
      this.props.addComment(data)
    }, 2 * 1000)
  },

  render(){
    return (
      <div className="commentBox">
        <h1>I'm a Comment</h1>
        <CommentList data={this.props.comments}></CommentList>
        <CommentForm onCommentSubmit={this.props.addComment}></CommentForm>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    comments: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (data) => dispatch({
      type: ADD_DATA,
      data
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)

