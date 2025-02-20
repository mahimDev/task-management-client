// src/components/TaskBoard.jsx
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TaskBoard({ tasks, setTasks, onAddTask, onUpdateTask, onDeleteTask }) {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const newTasks = Array.from(tasks);
        const [movedTask] = newTasks.splice(result.source.index, 1);
        newTasks.splice(result.destination.index, 0, movedTask);
        setTasks(newTasks);
        onUpdateTask(movedTask.id, { category: result.destination.droppableId });
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            {['To-Do', 'In Progress', 'Done'].map((category) => (
                <Droppable key={category} droppableId={category}>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <h2>{category}</h2>
                            {tasks.filter(task => task.category === category).map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {task.title}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ))}
        </DragDropContext>
    );
}

export default TaskBoard;