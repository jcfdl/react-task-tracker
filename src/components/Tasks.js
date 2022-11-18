import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<>
			{
				tasks.length
				?	tasks.map((task) => (
						<Task 
							key={task.id} 
							task={task} 
							onDelete={onDelete}
							onToggle={onToggle}
						/>
					))
				: <p>No Tasks To Show</p>
			}
		</>
	)
}

export default Tasks