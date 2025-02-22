// import React, { useState } from 'react';
// import { closestCorners, DndContext } from '@dnd-kit/core';

// import { arrayMove } from '@dnd-kit/sortable';
// import Input from './components/Input';
// import Column from './components/column';

// const MyRoutine = () => {
//   const [tasks, setTasks] = useState([
//     { id: '1', title: 'Complete homework', category: 'To-Do' },
//     { id: '2', title: 'Buy groceries', category: 'To-Do' },
//     { id: '3', title: 'Walk the dog', category: 'In Progress' },
//     { id: '4', title: 'Clean the house', category: 'To-Do' },
//     { id: '5', title: 'Prepare for meeting', category: 'To-Do' },
//     { id: '6', title: 'Write blog post', category: 'In Progress' },
//     { id: '7', title: 'Read book', category: 'Done' },
//     { id: '8', title: 'Fix bug in code', category: 'In Progress' },
//     { id: '9', title: 'Go to the gym', category: 'Done' },
//     { id: '10', title: 'Call mom', category: 'To-Do' },
//   ]);
  
//   const categories = ['To-Do', 'In Progress', 'Done'];
//   const getTaskPos = id => tasks.findIndex(task=>task.id === id)
//   const handleDragEnd = event =>{
//     const {active,over}=event;
//     if(!over) return;
//     if(active.id === over.id) return;
//     const newCategory = over.data.current.category;
//     setTasks((tasks)=>{
      
//       const originalPos = getTaskPos(active.id)
//       const newPos = getTaskPos(over.id)
//       return arrayMove(tasks,originalPos,newPos)
//     })

//   }
//   const addTask = title =>{
//     setTasks([...tasks,{id:tasks.length+1,title}])
//   }
//   return (
//     <div className='routine'>
// <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>

// <Input onSubmit={addTask}></Input>

//  <div className='grid grid-cols-3 gap-4 mt-4'>
//   {
//     categories.map((category)=>
//       <Column key={category} category={category} tasks={tasks.filter((task)=>task.category===category)}></Column>
//     )
//   }
//  </div>
// </DndContext>
//     </div>
//   );
// };

// export default MyRoutine;  





// import React, { useState } from 'react';
// import { closestCorners, DndContext } from '@dnd-kit/core';
// import { arrayMove } from '@dnd-kit/sortable';
// import Input from './components/Input';
// import Column from './components/column';
// import { useQuery } from '@tanstack/react-query';
// import axiosPublic from './axiosPublic';

// const MyRoutine = () => {
//   const [tasks, setTasks] = useState();

//   const {data:tasks=[],refetch,isLoading}=useQuery({
//     queryKey:['tasks'],
//     queryFn:async()=>{
//       const res = await axiosPublic.get('/tasks');
//       return res.data;
//     }
//   })
//   console.log(tasks)

//   const categories = ['To-Do', 'In Progress', 'Done'];

//   // Get the position of a task by its id
//   const getTaskPos = id => tasks.findIndex(task => task.id === id);

//   // Handle the drag end logic
//   const handleDragEnd = event => {
//     const { active, over } = event;

//     if (!over) return; // No drop target
//     if (active.id === over.id) return; // Same task, no move

//     // Get the task being dragged and its destination
//     const activeTask = tasks.find(task => task.id === active.id);
//     const overTask = tasks.find(task => task.id === over.id);

//     // If the task is being moved to a different category
//     if (activeTask.category !== overTask.category) {
//       // Update the task's category and move it within the new category
//       const updatedTasks = tasks.map(task => 
//         task.id === active.id
//           ? { ...task, category: overTask.category } // Change category
//           : task
//       );

//       setTasks(updatedTasks);
//     } else {
//       // If it's being moved within the same category
//       const originalIndex = getTaskPos(active.id);
//       const newIndex = getTaskPos(over.id);

//       setTasks(prevTasks => {
//         const reorderedTasks = arrayMove([...prevTasks], originalIndex, newIndex);
//         return reorderedTasks;
//       });
//     }
//   };

//   // Add a new task
//   const addTask = title => {
//     setTasks(prevTasks => [
//       ...prevTasks,
//       { id: `${tasks.length + 1}`, title, category: 'To-Do' },
//     ]);
//   };

//   return (
//     <div className="routine">
//       <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
//         <Input onSubmit={addTask} />

//         <div className="grid grid-cols-3 gap-4 mt-4">
//           {categories.map(category => (
//             <Column
//               key={category}
//               category={category}
//               tasks={tasks.filter(task => task.category === category)}
//             />
//           ))}
//         </div>
//       </DndContext>
//     </div>
//   );
// };

// export default MyRoutine;








import React from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import Input from './components/Input';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosPublic from './axiosPublic';
import Column from './components/column';

const MyRoutine = () => {
  const queryClient = useQueryClient();

  // Fetch tasks
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await axiosPublic.get('/tasks');
      return res.data;
    },
  });

  // Update task category in the backend
  const updateTaskMutation = useMutation({
    mutationFn: async ({ id, category }) => {
      await axiosPublic.patch(`/tasks/${id}`, { category });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  // Update task order in the backend
  const updateTaskOrderMutation = useMutation({
    mutationFn: async ({ taskId, newOrder }) => {
      await axiosPublic.patch('/tasks/reorder', { taskId, newOrder });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  // Add a new task
  const addTaskMutation = useMutation({
    mutationFn: async ({ title, description, category }) => {
      await axiosPublic.post('/tasks', { title, description, category });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });

  // Handle drag-and-drop
  const handleDragEnd = event => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeTask = tasks.find(task => task._id === activeId);
    const overTask = tasks.find(task => task._id === overId);

    if (activeTask) {
      if (overTask) {
        // Moving within the same category
        if (activeTask.category === overTask.category) {
          const categoryTasks = tasks.filter(task => task.category === activeTask.category);
          const oldIndex = categoryTasks.findIndex(task => task._id === activeId);
          const newIndex = categoryTasks.findIndex(task => task._id === overId);

          // Update the task order locally
          const updatedTasks = arrayMove(categoryTasks, oldIndex, newIndex);
          queryClient.setQueryData(['tasks'], tasks.map(task =>
            updatedTasks.find(updatedTask => updatedTask._id === task._id) || task
          ));

          // Send the new order to the backend
          updateTaskOrderMutation.mutate({ taskId: activeTask._id, newOrder: newIndex });
        }
      } else {
        // Task dropped in a new category
        const newCategory = overId; // Column ID is category name
        if (newCategory !== activeTask.category) {
          updateTaskMutation.mutate({ id: activeTask._id, category: newCategory });
          
          // After updating the category, update the order based on the new category
          const newCategoryTasks = tasks.filter(task => task.category === newCategory);
          const newOrder = newCategoryTasks.length; // New task will be at the end of the list in this category

          updateTaskOrderMutation.mutate({ taskId: activeTask._id, newOrder });
        }
      }
    }
  };

  return (
    <div className="routine">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input
          onSubmit={({ title, description, category }) => addTaskMutation.mutate({ title, description, category })}
        />

        {isLoading ? (
          <p>Loading tasks...</p>
        ) : (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {['To-Do', 'In Progress', 'Done'].map(category => (
              <Column
                key={category}
                category={category}
                id={category} // Corrected column ID
                tasks={tasks
                  .filter(task => task.category === category)
                  .sort((a, b) => a.order - b.order)} // Sorting tasks by order
              />
            ))}
          </div>
        )}
      </DndContext>
    </div>
  );
};

export default MyRoutine;
