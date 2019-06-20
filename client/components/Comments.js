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
      </div>
    )
  }
}

export default Comments;