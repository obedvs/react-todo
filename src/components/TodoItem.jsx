import React from 'react'

import { CrossIcon } from './icons/CrossIcon'
import { CheckIcon } from './icons/CheckIcon'

const TodoItem = React.forwardRef(({ todo, completeTodo, removeTodo, ...props }, ref) => {

  const { id, title, completed } = todo;

  return (
    <article {...props} ref={ref} className="border-b-gray-200 dark:border-b-gray-600 dark:bg-gray-800 flex gap-4 p-4 transition-colors duration-500 bg-white border-b">
        <button className="size-5 flex-none" onClick={() => completeTodo(id)} >
          {completed ? 
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 size-full flex items-center justify-center rounded-full'><CheckIcon /></div>
          : <span className="size-full inline-block border-2 rounded-full"></span>}
        </button>
        <p className={`grow transition-colors duration-500 ${completed ? 'text-gray-400 dark:text-gray-600 line-through' : 'text-gray-600 dark:text-gray-400'}`}>{title}</p>
        <button className="flex-none" onClick={() => removeTodo(id)}><CrossIcon /></button>
    </article>
  )
})

export default TodoItem