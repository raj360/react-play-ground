import { ADD_TODO } from "../actions";


const initialState = {
    toDoList:[]
};

export default function reducer(state=initialState,action){
  
   switch (action.type) {
     case ADD_TODO :
       return {
        ...state,
        toDoList: [...state.toDoList, {...action.toDoItem}]
       }
       break;
   
     default:
     return start;
   }

}