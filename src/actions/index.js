
export const ADD_TODO =  'ADD_TODO';

export function addTodo(title){

  return {
    type:ADD_TODO,
   toDoItem:{
   _id:(new Date().getTime()),
   title
  }}
}