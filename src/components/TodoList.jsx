import { Draggable, Droppable } from "@hello-pangea/dnd"

import TodoItem from "./TodoItem"

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <Droppable droppableId="todos">
      {
        (provided) => (
          <div className="rounded-t-md mt-8 overflow-hidden shadow-lg" {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                {
                  (draggable) => (
                    <TodoItem key={todo.id} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} ref={draggable.innerRef} {...draggable.dragHandleProps} {...draggable.draggableProps}/>
                  )
                }
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}

export default TodoList