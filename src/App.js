import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Gym Schedule',
        day: '14th Jan 2023 at 5:00am',
        reminder: true
    },
    {
        id: 2,
        text: 'StandUp Meeting',
        day: '16th Jan 2023 at 8:00am',
        reminder: true
    },
    {
        id: 3,
        text: 'Birthday Party',
        day: '17th Jan 2023 at 8:00am',
        reminder: true
    },
])

//Add Task Submit
const addTask = (task) => {
  const id = Math.floor(Math.random()) * 10000 + 1

  //console.log(id)

  const newtask = { id, ...task }
  setTasks([...tasks, newtask])
}


//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id ===id 
  ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : ( 
            'No Tasks To Show'
            )}
    </div>
  )
}

export default App;



