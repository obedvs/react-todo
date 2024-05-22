import TodoItem from "./TodoItem"

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <div className="rounded-t-md mt-8 overflow-hidden shadow-lg">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
        ))}
    </div>
  )
}

export default TodoList