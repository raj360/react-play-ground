import { ADD_TODO,RENDER_TODO_LIST} from "../actions";


const initialState = {
    toDoList:[]
};

export default function toDoApp(state=initialState,action){
  
   switch (action.type) {
     case ADD_TODO :
       return {
        ...state,
        toDoList: [...state.toDoList, {...action.toDoItem}]
       };
     case RENDER_TODO_LIST:
     return {
       ...state,
       toDoApp:action.toDoList,
     };
     default:
     return state;
   }

}