// import React from 'react';
// import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
// import Task from './Task';
// import { useDroppable } from '@dnd-kit/core';

// const Column = ({ tasks, category }) => {
//   const { setNodeRef } = useDroppable({
//     id: category,
//     data: { category }, // Store category for drag detection
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       className="flex flex-col gap-4 p-4 bg-gray-200 rounded-lg min-h-[300px]"
//     >
//       <h3 className="text-lg font-semibold text-center mb-2">{category}</h3>
//       <SortableContext
//         items={tasks.map((task) => task.id)}
//         strategy={verticalListSortingStrategy}
//       >
//         {tasks.map((task) => (
//           <Task
//             key={task.id}
//             id={task.id}
//             title={task.title}
//             description={task.description}
//             category={category}
//           />
//         ))}
//       </SortableContext>
//     </div>
//   );
// };

// export default Column;







import React from 'react';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Task from './Task';
import { useDroppable } from '@dnd-kit/core';

const Column = ({ tasks, category }) => {
  const { setNodeRef } = useDroppable({
    id: category,
    data: { category }, // Store category for drag detection
  });

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col gap-4 p-4 bg-gray-200 rounded-lg min-h-[300px]"
    >
      <h3 className="text-lg font-semibold text-center mb-2">{category}</h3>
      <SortableContext
  items={tasks.map((task) => task._id)} // Use `_id` instead of `id`
  strategy={verticalListSortingStrategy}
>
  {tasks
    .sort((a, b) => a.order - b.order) // Sort tasks based on their order field
    .map((task) => (
      <Task
        key={task._id}
        id={task._id}
        title={task.title}
        description={task.description}
        category={category}
      />
    ))}
</SortableContext>


    </div>
  );
};

export default Column;
