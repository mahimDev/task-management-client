// src/pages/Dashboard.jsx
import { useState, useEffect } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "../services/taskService.js";
import TaskBoard from "../../Components/TaskBoard/TaskBoard.jsx";

function Dashboard() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchTasks() {
            const data = await getTasks();
            setTasks(data);
        }
        fetchTasks();
    }, []);

    const handleAddTask = async (newTask) => {
        const addedTask = await addTask(newTask);
        setTasks([...tasks, addedTask]);
    };

    const handleUpdateTask = async (taskId, updatedData) => {
        const updatedTask = await updateTask(taskId, updatedData);
        setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div>
            <h1>Task Dashboard</h1>
            <TaskBoard tasks={tasks} setTasks={setTasks} onAddTask={handleAddTask} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
        </div>
    );
}

export default Dashboard;