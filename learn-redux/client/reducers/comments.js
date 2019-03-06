function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      // return the new state with the new comment
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      console.log("removing comment");
      // return new state without deleted comment
      return [
        // from start to the one we want to delete
        ...state.slice(0, action.i),
        // after deleted one
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}
function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

export default comments;
