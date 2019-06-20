import React, { Component } from 'react';
import Photo from './Photo';

class GridPhoto extends Component {
  render() {
    const { posts } = this.props;
    return(
      <div className="photo-grid">
        {posts.map((post, i) => <Photo 
          {...this.props} 
          key={i} 
          post={post} 
          i={i} /> )}
      </div>
    )
  }
}

export default GridPhoto;