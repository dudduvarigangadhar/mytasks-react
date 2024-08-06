import {TaskContainer, TaskName, TaskCategory} from './styledComponents'

const Tasks = props => {
  const {details} = props
  const {id, taskName, taskCategory, bgColor} = details
  return (
    <TaskContainer>
      <TaskName>{taskName}</TaskName>
      <TaskCategory>{taskCategory}</TaskCategory>
    </TaskContainer>
  )
}

export default Tasks
