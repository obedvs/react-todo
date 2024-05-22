const TodoFilter = ({ setFilter, filter }) => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-200 container flex justify-center gap-4 p-4 mt-8 transition-colors duration-500 bg-white rounded-md">
        <button className={`hover:text-blue-400 ${filter === 'all' ? 'text-blue-600' : '' }`} onClick={() => setFilter('all')}>All</button>
        <button className={`hover:text-blue-400 ${filter === 'active' ? 'text-blue-600' : '' }`} onClick={() => setFilter('active')}>Active</button>
        <button className={`hover:text-blue-400 ${filter === 'completed' ? 'text-blue-600' : '' }`} onClick={() => setFilter('completed')}>Completed</button>
    </section>
  )
}

export default TodoFilter