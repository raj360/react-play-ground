import { ADD_TODO } from "../actions";


const initialState = {
    toDoList:[]
};

export default function reducer(state=initialState,action){
  
   switch (action.type) {
     case ADD_TODO :
       return {
        ...state: [...state.toDoList, {...action.toDoItem}]
       }
       break;
   
     default:
       break;
   }

}