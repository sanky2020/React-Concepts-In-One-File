//Extract State Logic to Redux
//to add new messages from the user to the state

//Action Type
const ADD = "ADD";

//action creator
const addMessage =(message)=>{
  return{
    type: ADD,
    message
  }
}

//reducer 
const messageReducer =(state=[],action)=>{
  switch(action.type){
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

//Redux store 
const store = Redux.createStore(messageReducer)
