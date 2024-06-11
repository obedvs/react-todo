import { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";

import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [reorderedItem] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, reorderedItem);

  return result;
}

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  const completeTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const computedItemsLeft = todos.filter(todo => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const [filter, setFilter] = useState('all');

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos
      case 'active':
        return todos.filter(todo => !todo.completed)
      case 'completed':
        return todos.filter(todo => todo.completed)
      default:
        return todos
    }
  }

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index && source.droppableId === destination.droppableId) return;

    setTodos((prevTodos) => reorder(prevTodos, source.index, destination.index));
  }

  return (
    <div className="dark:bg-gray-900 relative z-0 min-h-screen transition-colors duration-500 bg-gray-200">
      <div className="transition-colors duration-500 absolute dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-cover bg-top top-0 max-h-[13.5rem] left-0 size-full -z-10" />
      
      <Header />

      <main className="container max-w-4xl px-4 mx-auto mt-8">
        <TodoCreate addTodo={addTodo} />
        
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList todos={filteredTodos()} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </DragDropContext>
        
        <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />

        <TodoFilter setFilter={setFilter} filter={filter}/>
      </main>

      <footer className="dark:text-gray-400 mt-8 text-center transition-colors duration-500">Drag and drop to reorder list</footer>
    </div>
  )
}

export default App
