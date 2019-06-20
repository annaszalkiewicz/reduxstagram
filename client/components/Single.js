import React, { Component } from 'react';
import Photo from './Photo';

class Single extends Component {
  render() {
    const { posts, params } = this.props;
    const i = posts.findIndex((post) => post.code = params.postId);
    const post = posts[i];
    return(
      <div className="single-photo">
        <Photo
        i={i}
        post={post}
        {...this.props} />
      </div>
    )
  }
}

export default Single;