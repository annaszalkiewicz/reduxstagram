export const incrementLike = (index) => {
  return {
    type: 'INCREMENT_LIKE',
    index
  }
}

export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export const removeComment = (postId, index) => {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
