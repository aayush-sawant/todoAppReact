// import React,{ useState} from 'react'
// import Todo from './Todo';
// import TodoForm from './TodoForm'

// function TodoList() {
//     const [todos,setTodos]=useState([]);

//     // const addTodo = useCallback((todo)=>{
//     //     if (!todo.text || /^\s*$/.test(todo.text)) {
//     //         return;
//     //       }
//     //     const newTodos = [todo,...todos];
//     //     setTodos(newTodos);
//     //     console.log(...todos);
//     // },[todos]);
//     const addTodo = todo => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//           return;
//         }
    
//         const newTodos = [todo, ...todos];
    
//         setTodos(newTodos);
//         console.log(todo,...todos);
//       };

//     const completeTodo = id =>{
//         let updatedTodos = todos.map(todo=>{
//             if(todo.id===id){
//                 todo.isComplete=!todo.isComplete;
//             }
//             return todo;
//         })
//         setTodos(updatedTodos)
//     }
//   return (
//     <div>
//         <h1>
//             Whats the plan for today?
//         </h1>
//         <TodoForm onSubmit={addTodo}/>
//         <Todo 
//         todos={todos}
//         completeTodo={completeTodo}
//         />
//     </div>
//   )
// }

// export default TodoList
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
