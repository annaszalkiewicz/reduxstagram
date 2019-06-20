import React, { Component } from 'react';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    
    e.preventDefault();

    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    const { postComments } = this.props;

    return(
      <div className="comments">
        {postComments.map((comment, i) => {
           return (
            <div className="comment" key={i}>
              <p className="user">
                <strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment">&times;</button>
              </p>
            </div> 
           )
        })}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" name="author" id="author" placeholder="Name" />
          <input type="text" ref="comment" name="comment" id="comment" placeholder="Comment" />
          <input type="submit" value="Add comment" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;