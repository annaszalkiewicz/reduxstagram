import React, { Component } from 'react';

class Comments extends Component {
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
        <form ref="commentForm" className="comment-form">
          <input type="text" name="author" id="author" placeholder="Name" />
          <input type="text" name="comment" id="comment" placeholder="Comment" />
          <input type="submit" value="Add comment" hidden />
        </form>
      </div>
    )
  }
}

export default Comments;