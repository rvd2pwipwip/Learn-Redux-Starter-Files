//a reducer takes in two things:

//1. the action (info about what happened)
//2. copy of current state

function posts(action, state = []) {
  console.log(state, action);
  return state;
}

export default posts;
