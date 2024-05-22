import { useState } from "react"

const TodoCreate = ({ addTodo }) => {

  const [title, setTitle] = useState('')

  const handleSubmitAddTodo = (e) => {
    e.preventDefault()
    
    if (!title.trim()) {
      return setTitle('')
    }
    
    addTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-800 flex items-center gap-4 p-4 mt-8 overflow-hidden transition-colors duration-500 bg-white rounded-md">
        <span className="size-5 inline-block border-2 rounded-full"></span>
        <input type="text" placeholder="Create a new todo..." className="dark:bg-gray-800 dark:text-gray-200 w-full transition-colors duration-500 outline-none"
          onChange={(e) => setTitle(e.target.value)} value={title}
        />
    </form>
  )
}

export default TodoCreate