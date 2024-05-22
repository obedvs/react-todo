const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="rounded-b-md dark:bg-gray-800 flex justify-between p-4 transition-colors duration-500 bg-white shadow-lg">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button className="text-gray-400" onClick={clearCompleted}>Clear Completed</button>
    </section>
  )
}

export default TodoComputed